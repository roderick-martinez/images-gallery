FROM node:15.14-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install -g npm@8.1.0
RUN npm install --silent

COPY . ./

CMD ["npm", "start"]