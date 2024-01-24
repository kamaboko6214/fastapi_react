from fastapi import APIRouter
from sqlalchemy.orm import Session

from app.db import models,schemas

router = APIRouter()

def index(db: Session,  user: schemas.User):
    return db.query(models.stock.Stock).filter(models.stock.Stock.user_id == user.id).all()
