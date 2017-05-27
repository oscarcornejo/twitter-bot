Twitter Bot
=============

Bot para retuitear en Twitter.

## Antes de todo
Antes de arrancar este bot debes:

* Instalar Nodejs: [nodejs.org](https://nodejs.org/es/)
* Crear Una aplicación de Twitter: [apps.twitter.com/app/new](https://apps.twitter.com/app/new)
* Abrir una cuenta de Heroku o Now (Yo ocupé Heroku): [heroku.com](https://signup.heroku.com/login) - [zeit.co/now](https://zeit.co/now)
* Descargar o clonar este repositorio.

## Setear archivo config.js

Luego de crear tu aplicación en twitter debes agregar la siguiente información al archivo config.js:
```
consumer_key: 'AGREGAR-tu-consumer_key',  
consumer_secret: 'AGREGAR-tu-consumer_secret',
access_token: 'AGREGAR-tu-access_token',  
access_token_secret: 'AGREGAR-tu-access_token_secret'
```

Estos datos son entregados por Twitter al momento de crear dicha aplicación.

## Instalación
```
npm install
npm start
```

## Deploy en Heroku con cuenta ya creada
```
$ heroku login
$ git init
$ heroku create nombre-twitterbot
$ git add .
$ git commit -m "Primer commit de config"
$ git push heroku master
```


