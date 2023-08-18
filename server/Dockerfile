FROM node:lts-bullseye 

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

CMD ["npm", "run",  "dev"]

