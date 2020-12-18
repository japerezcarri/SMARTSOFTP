FROM node:12

WORKDIR /app

COPY package*.json ./
COPY ormconfig.json ./
COPY tsconfig.json ./

RUN npm install

COPY  . .


CMD ["npm", "start"]