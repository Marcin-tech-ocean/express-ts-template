
### Available commands
* ```npm start``` - starts express server (default 4000 port)
* ```npm run test``` - runs tests once
* ```npm run test:watch``` - runs tests in watch mode
* ```npm run build``` - compiles TS into JS

<br />

### Technologies
* express
* typescript
* eslint
* dotenv
* jest
* docker

### Swagger
Run swagger server with docker
```docker pull swaggerapi/swagger-ui```<br />
```docker run -p 80:8080 swaggerapi/swagger-ui```
<br>
or you can provide your own swagger.json on your host
<br>

```
docker run -p 81:8080 \
-e SWAGGER_JSON=/app/swagger/swagger.yml \
-v $HOME/express-ts-template:/app \
swaggerapi/swagger-ui
```

