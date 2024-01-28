from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from app.db.database import Base
# from database import Base


class Memo(Base):
    __tablename__ = "memos"

    id = Column(Integer, primary_key=True, index=True, comment='id')
    name = Column(String(30), comment='name')
    count = Column(Integer, unique=True, index=True, comment='count')
    user_id = Column(Integer,ForeignKey("users.id"), comment='user_id')
    remarks = Column(String(100), comment='remarks')
    