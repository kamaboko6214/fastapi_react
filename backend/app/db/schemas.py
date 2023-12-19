from typing import Union

from pydantic import BaseModel, Field
from typing import Optional

class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    name: str
    email: str
    password: str
    image_path: Optional[str] = Field(None, description="イメージのパス")

class UserCreateResponse(UserBase):
    id: int

    class Config:
        orm_mode = True

class User(UserBase):

    class Config:
        orm_mode = True
