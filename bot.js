// Dependencies =========================
var  
    twit = require('twit'),
    config = require('./config');

var Twitter = new twit(config);

// Use Streams API for interacting with a USER ==========
// set up a user stream

var stream = Twitter.stream('user');

// FOLLOW-Reply BOT ===========================

// when someone follows
stream.on('follow', followed);

// ...trigger the callback
function followed(event) {  
  console.log('Evento Follow esta en ejecución');
  //get their twitter handler (screen name)
  var
    name = event.source.name,
    screenName = event.source.screen_name;
  // function that replies back to the user who followed
  tweetNow('@' + screenName + ' Gracias por el Follow.');
}

// function definition to tweet back to user who followed
function tweetNow(tweetTxt) {  
  var tweet = {
      status: tweetTxt
  }
  Twitter.post('statuses/update', tweet, function(err, data, response) {
    if(err){
      console.log("Error al responder");
    }
    else{
      console.log("La gratitud se muestra con éxito");
    }
  });
}

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params
var retweet = function() {  
    var params = {
        q: '#reactjs OR #Reactjs OR #nodejs OR #Nodejs OR angular OR Angular OR javascript OR Javascript',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    Twitter.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            // Tell TWITTER to retweet
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!');
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Algo salió mal mientras se Retuitiava... Quizás el tuit esta duplicado.');
                }
            });
        }
        // if unable to Search a tweet
        else {
          console.log('Se ha producido un error al BUSCAR...');
        }
    });
}

// grab & retweet as soon as program is running...
retweet();  
// retweet in every 10 minutes
setInterval(retweet, 600000);

// FAVORITE BOT====================

// find a random tweet and 'favorite' it
var favoriteTweet = function(){  
  var params = {
      q: '#reactjs OR #Reactjs OR #nodejs OR #Nodejs OR angular OR Angular OR javascript OR Javascript',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }
  // find the tweet
  Twitter.get('search/tweets', params, function(err,data){

    // find tweets
    var tweet = data.statuses;
    var randomTweet = ranDom(tweet);   // pick a random tweet

    // if random tweet exists
    if(typeof randomTweet != 'undefined'){
      // Tell TWITTER to 'favorite'
      Twitter.post('favorites/create', {id: randomTweet.id_str}, function(err, response){
        // if there was an error while 'favorite'
        if(err){
          console.log('Error al dar FAVORITO... ');
        }
        else{
          console.log('Éxito al dar FAVORITO!');
        }
      });
    }
  });
}
// grab & 'favorite' as soon as program is running...
favoriteTweet();  
// 'favorite' a tweet in every 60 minutes
setInterval(favoriteTweet, 3600000);

// function to generate a random tweet tweet
function ranDom (arr) {  
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
};