FROM node

# Instala as dependências do projeto
WORKDIR /app

COPY package-lock.json ./
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./
COPY prisma ./ 

# Copia o código-fonte do projeto
RUN npm install

RUN npm run build 

COPY . .

EXPOSE 3000

CMD npx prisma migrate dev && npx prisma generate && npm run start

# Inicia o servidor Prisma