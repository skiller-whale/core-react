FROM node:20.13.0

WORKDIR /app/exercises
EXPOSE 3500
EXPOSE 3501
ENTRYPOINT ["npm"]

COPY package*.json .
RUN npm i

COPY eslint.config.js .
COPY tsconfig.app.json .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .
COPY vitest.setup.ts .

CMD ["start"]
