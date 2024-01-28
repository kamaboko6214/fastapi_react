from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.db import models,schemas

router = APIRouter()

def index(db: Session,  user: schemas.User):
    return db.query(models.stock.Stock).filter(models.stock.Stock.user_id == user.id).all()

async def registration(stock_body: schemas.StockCreate, db: Session, user: schemas.User):
    genre = db.query(models.genre.Genre).filter(models.genre.Genre.id == stock_body.genre_id).first()
    # print(genre.id)
    stock_body.user_id = user.id
    stock_body.genre_id = genre.id
    stock = models.stock.Stock(**stock_body.dict())
    db.add(stock)
    db.commit()
    db.refresh(stock)
    return stock
