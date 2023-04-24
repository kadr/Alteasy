FROM python:3.10

RUN mkdir /app
WORKDIR /app

COPY ./requirements.txt ./requirements.txt

RUN python -m pip install --upgrade pip && \
    pip install --upgrade setuptools && \
    pip install --no-cache-dir -r ./requirements.txt

RUN apt update

COPY . .

RUN python manage.py makemigrations && python manage.py migrate && python manage.py loaddata seed/0001_Profile.json

EXPOSE 10000

CMD python manage.py runserver ${HOST}:${PORT}
