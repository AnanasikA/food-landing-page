$(document).ready(function() {

    var images = new Array('food.jpg', 'food-2.jpg', 'food-3.jpg');

    setInterval(function() {

        var random = images[Math.floor(Math.random()* images.length)];
        $('.image').css('background', 'url(' + random + ')');

    },2500);

});