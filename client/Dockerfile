FROM node:lts-slim as builder

ARG REACT_APP_API_URL=https://api-auth0.herokuapp.com

WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install 

# copy and build app
COPY ./ .
RUN npm run build

FROM nginx:alpine
ARG PORT
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
