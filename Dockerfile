#Stage 1
FROM node:lts-alpine3.15 AS builder

WORKDIR /app

COPY package*.json .

COPY . .

RUN npm install 

RUN npm run build



#Stage 2
FROM nginx:1.21.6-alpine

COPY --from=builder /app/dist/ /var/www/code

COPY --from=builder /app/devops/nginx.webapp.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]