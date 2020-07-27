FROM node:12
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9098
CMD ["node", "src/app.js"]
