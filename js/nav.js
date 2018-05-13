(function() {
  'use strict';

  var script = document.createElement('script');
  script.src = 'http://code.jquery.com/jquery-1.11.2.min.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

  //var clickedOnce = -1;
  var oldSelection = null;
  $(document).ready(function(){
      $('[data-related-panel]').click(function(){
      
        var target = $(this).data('related-panel');

        if( $('#'+target).css('display')=='block' && $('#dropdown').hasClass('active')){
            $('#dropdown').removeClass('active').css('display','none');
            $('#dropdown').find('section').hide();
            $("#"+target).hide();
          }
          else {
            $('#dropdown').addClass('active').css('display','block');
            $('#dropdown').find('section').hide();
            $("#"+target).show();
          }                
    });
  });
})();
