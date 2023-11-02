FROM node:16

RUN npm install -g ts-node

WORKDIR /app

COPY ./package*.json ./

COPY . .

RUN npm install

ENV JWT_SECRET = 'SECRETO_DE_LAUTARO'
ENV JWT_PUBLIC = 'CLAVE_PUBLICA'
ENV DB_PASSWORD = 'postgres'

ENV DB_DATABASE = 'aoki'
ENV DB_USERNAME = 'postgres'

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]