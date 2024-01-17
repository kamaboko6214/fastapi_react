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

