(function() {
  'use strict';

  var slideshow = [{
    'image': 'images/slideshow_1.jpeg',
    'caption': 'Cloudy with a chance of moon'
  }, {
    'image': 'images/slideshow_2.jpeg',
    'caption': 'Half moon mountain'
  }, {
    'image': 'images/slideshow_3.jpeg',
    'caption': 'Moonrise'
  }];

  $(document).ready(function(){

    var images = [];

    var currentIndex = 0;
      
    var wrapper = $('.slideshow-wrapper');
        for(var i = 0; i < slideshow.length; i++){ 
            var img = createImage(slideshow[i].image, slideshow[i].caption);
            wrapper.append(img);
            images.push(img);
        }

    select(currentIndex);

    console.log("slideshow ", images);

    function createImage(src, caption){
        var img = document.createElement('img');
        img.src = src;
        img.alt = caption;
        return img;
    }
    
    function select(index){
        if (index == 0){
          $('#prev').attr('disabled', 'disabled');
        }
        else{
          $('#prev').removeAttr('disabled');
        }

        if (index >= images.length - 1){ 
          $('#next').attr('disabled', 'disabled');
        }
        else{ 
          $('#next').removeAttr('disabled');
        }

       var current = $('.current');
       console.log(current);
       current.removeClass('current');
       document.querySelectorAll('img')[index].classList.add('current');
       $('#caption').text ( images[currentIndex].alt); 

    }
    
    $('#prev').click (function (){
        currentIndex = currentIndex - 1 < 0 ? currentIndex : currentIndex - 1;
        select(currentIndex);
        $('#current').text = images[currentIndex].title; 
      });

    $('#next').click (function (){
        currentIndex = currentIndex + 1 >= images.length ? currentIndex : currentIndex + 1;
        select(currentIndex);
        $('#current').text = images[currentIndex].title; 
      });

  });
})();
