from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.db import models,schemas
from app.db.models.genre import Genre
from app.db.models.stock import Stock

router = APIRouter()

def index(db: Session,  user: schemas.User):
    return db.query(Stock).filter(Stock.user_id == user.id).all()

async def registration(name: str, genre_id: int, deadline: str, count: int, db: Session, user: schemas.User):
    genre = db.query(Genre).filter(Genre.id == genre_id).first()
    genre_id = genre.id
    stock = models.stock.Stock(name = name, genre_id = genre_id, 
                               deadline = deadline, count = count, user_id = user.id)
    db.add(stock)
    db.commit()
    db.refresh(stock)
    return {'stock_id' : stock.id, 'stock_name': stock.name}
