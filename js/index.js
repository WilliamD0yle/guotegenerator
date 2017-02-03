$(document).ready(function() {
  $("#getMessage").on("click", function() {
    var colors = [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#03A9F4",
      "#FF3D00",
      "#0091EA"
    ];
    var random = colors[Math.floor(Math.random()*colors.length)];
    $("body").css("background-color",random);

    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', //The URL to the API.You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {

        $(".quote").html("<div class='words'><h4>" + data.quote + "</h4></div>" + "<div class='author'>" + "- " + "<i>" + data.author + "</i></div>");
        $('.tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+data.quote+' - '+data.author).attr('target', '_blank');
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "rGF3r6aD8OmshiTGADY4CNhIkrlxp16637Sjsn3lONnS7TYm38"); //Mashape key
      }
    });
  });
});