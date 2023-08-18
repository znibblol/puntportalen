FROM node:lts-bullseye

WORKDIR /app

COPY package*.json ./
COPY migrate.sh ./

RUN npm install

RUN npm install -g nodemon
RUN npm install -g knex

RUN chmod +x migrate.sh

CMD ["npm", "run",  "dev"]

