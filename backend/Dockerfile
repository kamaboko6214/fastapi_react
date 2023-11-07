FROM python:3.9

WORKDIR /usr/src/backend/

COPY ./requirements.txt /usr/src/backend/requirements.txt

RUN pip install --trusted-host --upgrade -r /usr/src/backend/requirements.txt

CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8080"]
