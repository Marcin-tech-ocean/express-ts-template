FROM node:14-alpine3.12

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

CMD ["node", "dist/app.js"]
