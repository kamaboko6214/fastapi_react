from fastapi import APIRouter, HTTPException, status
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
    stock = Stock(name = name, genre_id = genre_id, 
                               deadline = deadline, count = count, user_id = user.id)
    db.add(stock)
    db.commit()
    db.refresh(stock)
    return {'stock_id' : stock.id, 'stock_name': stock.name}

# 削除関数
async def delete(id:int, count:int, db: Session, user: schemas.User):
    targe_stock = db.query(Stock).filter(Stock.id == id).first()
    if targe_stock is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Stock not found")
    # リクエストされた数量分数を減らす
    target_count = targe_stock.count
    targe_stock.count = target_count - count
    db.add(targe_stock)
    db.commit()
    message = f"deleted {count}"
    # 0の時にストックの削除
    if(targe_stock.count == 0):
        db.delete(targe_stock)
        db.commit()
        message = "item deleted"
    #マイナスになった時はエラーで弾く
    elif(targe_stock.count < 0):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="マイナスはNG")
    return {"message":message, "name": targe_stock.name}