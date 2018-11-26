// this is for the nav side bar
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

//  this is for the comment text areas
$(document).ready(function() {
    // added input text for userName, input_text_article is the article identifier & the
    //textarea#textarea2 should be for the users comments. These should all be tied together
    //inside of a div that services the storage of the data in the mongoDB (or SQL in future situations)
    $('input#input_text, input#input_text_article, textarea#textarea2').characterCounter();
  });