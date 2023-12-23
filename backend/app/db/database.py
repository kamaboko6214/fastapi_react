from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

DATABASE = "mysql+pymysql"
# USER = os.environ.get("MYSQL_USER")
USER = "kainventory"
# PASSWORD = os.environ.get("MYSQL_PASSWORD")
PASSWORD = "kamaboko00"
HOST = "project_db"
# DB_NAME = os.environ.get("MYSQL_DATABASE")
DB_NAME = "inventorysh"
PORT = "3306"

SQLALCHEMY_DATABASE_URL = "{}://{}:{}@{}:{}/{}".format(
    DATABASE, USER, PASSWORD, HOST, PORT, DB_NAME
)
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()
