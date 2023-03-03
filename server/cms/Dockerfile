FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache libssl1.1

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]