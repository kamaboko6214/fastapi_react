from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database import Base


class Stock(Base):
    __tablename__ = "stocks"

    id = Column(Integer, primary_key=True, index=True, comment='id')
    name = Column(String(30), comment='name')
    genre_id = Column(Integer, ForeignKey("genres.id"), index=True, comment='genre_id')
    deadline = Column(Integer, comment='deadline')
    count = Column(Integer, comment='count')
    message = Column(String(100), comment='message')
    user_id = Column(Integer,ForeignKey("users.id"), comment='user_id')

    users = relationship("User", back_populates="stocks")
    genres = relationship("Genre", back_populates="stocks")