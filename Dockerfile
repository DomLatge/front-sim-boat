FROM node:14.17.6-buster-slim as build

WORKDIR /code

COPY package.json .
COPY package-lock.json .

#RUN npm install

RUN npm ci --production

COPY . .

RUN npm run build

## End of build stage

# NGINX server
FROM nginx:1.12-alpine as production

COPY --from=build /code/build /usr/share/nginx/html

EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]