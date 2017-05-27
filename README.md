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

## ¿Dónde colocar las palabras claves o #Hashtag para retuitear?

En la línea 49 del archivo bot.js se pasan algunos parámetros o propiedades de los cuales "q" es quién se encarga de nuestras búsquedas. Cualquier valor que entreguemos a esta propiedad, nuestro robot se encargará de buscar los tuits y Retuitear dichos post en base a este criterio. 

Ej: 
```
var retweet = function() {
  var params = {
    q: '#nodejs, #Nodejs',
    result_type: 'recent',
    lang: 'en'    
  }
  ...
}
```

Si deseas agregar más de dos criterios de búsquedas, incluir 'OR' entre cada parámetro:

```
var retweet = function() {  
    var params = {
        q: '#reactjs OR #Reactjs OR #nodejs OR #Nodejs OR angular OR Angular',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    ...
}
    
```

Como ven, la única propiedad obligatoria es "q", "result_type" y "lang" son opcionales, donde:

* result_type: Notifica sólo para buscar los últimos tuits o aquellos mensajes de twitter que han ocurrido desde que nuestro robot ha comenzado, es decir, los últimos retuits. Puede cambiar de 'recent' a 'popular'.

* lang: Es el idioma de los tuits a buscar. En mi caso dejé la búsqueda en Ingles o 'en'.

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


