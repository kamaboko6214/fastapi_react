from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session

from app.crud import registration
from app.db.database import get_db
from app.api import auth_api
from app.db import schemas

router = APIRouter()

# 在庫一覧
@router.get("/stockindex")
async def index(db: Session = Depends(get_db), user: schemas.User = Depends(auth_api.get_current_active_user)):
    result = registration.index(db,user)
    return result
