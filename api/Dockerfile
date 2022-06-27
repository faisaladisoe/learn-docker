# Command 1-4 is layer caching. so machine doesn't have to process from start again. just use the existing resource
FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]