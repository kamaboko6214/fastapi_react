from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session

from app.crud import stock_crud
from app.db.database import get_db
from app.api import auth_api
from app.db import schemas
from app.db.models import genre

router = APIRouter()

# 在庫一覧
@router.get("/stockindex")
async def index(db: Session = Depends(get_db), user: schemas.User = Depends(auth_api.get_current_active_user)):
    result = stock_crud.index(db,user)
    return result

#在庫登録
@router.post("/stockregistration")
async def registration(stodck_body: schemas.StockCreate, db: Session = Depends(get_db), user: schemas.User = Depends(auth_api.get_current_active_user)):
    return await stock_crud.registration(stodck_body, db, user)
