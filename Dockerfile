FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

EXPOSE 4000

RUN npm install

ENTRYPOINT ["node", "index.js"]