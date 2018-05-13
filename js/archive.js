(function() {
  'use strict';

  var jsonURL = 'https://credentials-api.generalassemb.ly/explorer/posts?offset='

  $(document).ready(function(){
    var offset = 0;
    $('#load-more').click(function(){
      $('#load-more').attr('disabled', 'disabled');
      $('#load-more').text('Exploring the archive...');
      $('#load-more').append('<span id="spinner"></span>');
      $('#spinner').addClass('fa fa-circle-o-notch fa-spin');
      
      var url = jsonURL + offset;

      $.ajax({
        url: url,
        context: document.body
      }).done(function(resp){
         var json =JSON.parse(resp);
         
         if (!resp) {
          $('#load-more').text('Something Went Wrong');
          return;
         }
         if (json.posts.length == 0){
            $('#load-more').text('End of Archive');
            offset = 0;
            return;
         }
        
         for (var i = 0; i < json.posts.length; i++){
            var post = $('<article>');
            
            post.append($("<i>", {'class': 'fa ' + json.posts[i].category}));
            post.append($("<h2>", {'text': 'From the Archive' }));
            post.append($("<h1>", {'text':json.posts[i].title }));
            post.append($("<h3>", {'text':json.posts[i].date }));
            post.append($("<p>", {'text':json.posts[i].blurb }));
            $('#article-list').find('footer').before(post);
         }
         offset+=4;
         $('#load-more').removeAttr('disabled'); 
         $('#load-more').text('LOAD MORE');
      });

    });    
  });
})();
