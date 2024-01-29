from typing import Union

from pydantic import BaseModel, Field
from typing import Optional

class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    name: str
    email: str
    password: str
    # password_confirm: Optional[str] = Field(None, description="パスワード確認用")
    # # image_path: Optional[str] = Field(None, description="イメージのパス")

class UserCreateResponse(UserBase):
    id: int

    class Config:
        orm_mode = True

class User(UserBase):
    id: int
    name: str
    email: Union[str, None] = None
    hashed_password: Union[str, None] = None
    image_path: Union[str, None] = None
    
    class Config:
        orm_mode = True
        
# 在庫関連の型定義
class Stock(BaseModel):
    name: str

class StockCreate(Stock):
    genre_id: int
    deadline: Optional[str] = None
    count: Optional[int] = None

class StockCreateResponse(StockCreate):
    id: int
    class Config:
        orm_mode = True

# メモ関連の型定義
class memo(BaseModel):
    name: str
    count: int
    user_id: int
    remarks: str

class memo(BaseModel):
    name: str
    count: int
    user_id: int
    remarks: str
    
class genreResponse(BaseModel):
    id: int
    name: str