from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .stock import Stock
from .memo import Memo
from app.db.database import Base
# from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(30))
    email = Column(String(50), unique=True, index=True)
    hashed_password = Column(String(200))
    image_path = Column(String(50))
    
    stocks = relationship("Stock", backref="users")
    memos = relationship("Memo", backref="users")