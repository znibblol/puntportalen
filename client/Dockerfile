FROM node:lts-bullseye 

WORKDIR /app

COPY package*.json ./

RUN npm install

CMD ["npm", "run",  "serve-test"]
