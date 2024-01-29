from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.db import models,schemas
from app.db.models.genre import Genre
from app.db.models.stock import Stock

router = APIRouter()

def index(db: Session,  user: schemas.User):
    return db.query(Stock).filter(Stock.user_id == user.id).all()

async def registration(stock_body: schemas.StockCreate, db: Session, user: schemas.User):
    genre = db.query(Genre).filter(Genre.id == stock_body.genre_id).first()
    stock_body.genre_id = genre.id
    stock = models.stock.Stock(name = stock_body.name, genre_id = stock_body.genre_id, 
                               deadline = stock_body.deadline, count = stock_body.count, user_id = user.id)
    db.add(stock)
    db.commit()
    db.refresh(stock)
    return stock
