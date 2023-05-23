FROM node:19-alpine

RUN npm i -g nodemon 

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000


CMD [ "nodemon","-L","app" ]