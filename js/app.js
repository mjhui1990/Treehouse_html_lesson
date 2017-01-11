//Problem user goes to deadend
//solution: create a overlay large box

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//add img
$overlay.append($image);

//add caption
$overlay.append($caption);
//add overlay

$("body").append($overlay);



//1. Capture the click event on a link to an image
    $("#gallery a").click(function(event){
        event.preventDefault();
        var imageLocation = $(this).attr("href");
           //load img on overlay
            $image.attr("src", imageLocation);
           
            //1.1 show the overlay
             $overlay.show();

  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  

    });

    $overlay.click(function(){
    $overlay.hide();

    });
