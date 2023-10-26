FROM node

WORKDIR /app

COPY . .

RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 8000

CMD ["npm", "run", "dev"]