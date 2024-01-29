from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from app.db.database import Base
# from database import Base


class Stock(Base):
    __tablename__ = "stocks"

    id = Column(Integer, primary_key=True, index=True, comment='id')
    name = Column(String(30), comment='name')
    genre_id = Column(Integer, ForeignKey("genres.id"), index=True, comment='genre_id')
    deadline = Column(String, comment='deadline')
    count = Column(Integer, comment='count')
    user_id = Column(Integer,ForeignKey("users.id"), comment='user_id')
