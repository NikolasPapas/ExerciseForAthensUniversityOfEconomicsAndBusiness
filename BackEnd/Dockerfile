FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install mongoose dotenv
RUN npm install bcrypt jsonwebtoken
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]