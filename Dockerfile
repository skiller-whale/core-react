FROM node:18.16.0

WORKDIR /app/exercises
EXPOSE 3500
EXPOSE 3501
EXPOSE 3502
ENTRYPOINT ["npm"]

COPY package*.json .
RUN npm i

COPY tsconfig.json .
COPY eslint.config.js .
COPY vite.config.ts .

CMD ["start"]
