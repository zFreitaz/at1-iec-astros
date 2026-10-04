# 1. Define a imagem de origem base 
FROM node:20-alpine

# 2. Define diretório de trabalho interno do container
WORKDIR /app

# 3. Copia os manifestos de dependências
COPY package*.json ./

# 4. Instala as dependências do projeto
RUN npm install

# 5. Copia todo o restante do código
COPY . .

# 6. Expõe a porta padrão da aplicação
EXPOSE 3000

# 7. Comando para inicializar a aplicação em modo desenvolvimento
CMD ["npm", "run", "dev"]