FROM node:24.14.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]