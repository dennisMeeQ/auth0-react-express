FROM node:lts-slim as builder

# ARG AUTH0_CLIENTID
# ENV REACT_APP_AUTH0_CLIENTID ${AUTH0_CLIENTID}

WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install 

# copy and build app
COPY ./ .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html/build
COPY ./nginx/nginx.conf /etc/nginx/