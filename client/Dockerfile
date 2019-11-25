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
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
