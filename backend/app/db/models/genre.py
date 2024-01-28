from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .stock import Stock
from app.db.database import Base
# from database import Base

class Genre(Base):
    __tablename__ = "genres"

    id = Column(Integer, primary_key=True, index=True, comment='id')
    name = Column(String(30), comment='name')

    stocks = relationship("Stock", backref="genres")