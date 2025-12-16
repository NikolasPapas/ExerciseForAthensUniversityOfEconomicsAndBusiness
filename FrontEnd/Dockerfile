FROM node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@latest
RUN npm install --legacy-peer-deps
RUN npm install @angular/material @angular/cdk @angular/animations --save
COPY . .
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 4200
CMD ["npm", "start","nginx", "-g", "daemon off;"]


