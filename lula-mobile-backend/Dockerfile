FROM python:3.7

ADD . /app 
# copying you program into a folder called /app

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000

CMD python app.py