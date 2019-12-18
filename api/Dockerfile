FROM node:10.17-alpine

WORKDIR /usr/app/

COPY package*.json ./
RUN npm install

COPY src ./src

CMD [ "npm", "start" ]
