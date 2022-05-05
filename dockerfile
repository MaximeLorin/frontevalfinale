FROM node:latest as build

WORKDIR /usr/local/app


COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


EXPOSE 4200

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=node /usr/local/app/dist/front-final-project .

ENTRYPOINT ["nginx", "-g", "daemon off;"]