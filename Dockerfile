FROM node:20.13.0

WORKDIR /app/exercises
EXPOSE 3500
EXPOSE 3501
EXPOSE 3502
ENTRYPOINT ["npm"]

COPY package*.json .
RUN npm i

COPY eslint.config.js .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .
COPY vite.config.ts .

CMD ["start"]
