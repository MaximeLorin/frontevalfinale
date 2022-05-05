FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


EXPOSE 4200

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=node /app/dist/front-final-project .

ENTRYPOINT ["nginx", "-g", "daemon off;"]