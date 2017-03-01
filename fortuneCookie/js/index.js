var fortunes = [];

function getFortune() {
  $.ajax({
      url: 'http://fortunecookieapi.herokuapp.com/v1/fortunes',
      success: function(data) {
        fortunes.push(data);
    }
  })
}

function postTweet() {
//Format fortune for URL
    var preFill = $('.header').text()
      .replace(/["/.]/g, "")
      .replace(/\s/g, "%20");
//Insert into URL
    $('.tweet').attr('href', 'https://twitter.com/intent/tweet?text=My%20FortuneCookie%20fortune%20is%3A%20' + '%22' + preFill + '%22');
  };  


$(document).ready(function() {
  getFortune()
  $('.btn').click(function() {
    $('.header').text(JSON.stringify(fortunes[0][Math.floor((Math.random() * 100) + 1)]
      .message)).addClass('fortune');
      postTweet();
  });
});