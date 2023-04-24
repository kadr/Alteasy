FROM node:20-alpine3.16

RUN mkdir /app
WORKDIR /app
COPY package.json /app/package.json

RUN npm install
COPY . /app

RUN npm run build

EXPOSE 3000

CMD ['npm', 'run', 'start']
