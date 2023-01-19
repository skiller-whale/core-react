FROM node:18.12

WORKDIR /app/exercises

COPY ./babel.config.js .
COPY ./package*.json .
COPY ./tsconfig.json .
COPY ./webpack.config.js .
RUN npm install

EXPOSE 3500

CMD ["npm", "start"]
