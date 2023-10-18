#Utilização da imagem mais recente do nodeJS como base do nosso container 
FROM node

#definir o diretorio onde serão armazenados os arquivos 
WORKDIR /app

# copiar os arquivos de configuração da nossa aplicação , assim necessitando apenas executar o comando NPM install para instalar as dependencias 
COPY tsconfig*.json ./
COPY package*.json ./

#instalar as dependencias da aplicação
RUN npm i

#criar uma build estavel 
RUN npm run build 

#copiar os diretorios importantes da aplicação 
COPY prisma  ./prisma/
COPY dist ./dist/

#Comandos para configurar o vinculo da API com o banco de dados 
RUN npx prisma generate
RUN npx prisma migrate dev

#Definição da porta que será utilizada pela aplicação 
ENV PORT=3000
EXPOSE 3000

#Comando para rodar a aplicaçao 
CMD [ "npm", "run", "start" ]




