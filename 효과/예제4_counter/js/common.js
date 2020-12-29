$(function(){
  /*script 영역 count animation 만들기 예*/
  $(".flex_box .count").each(function(){
    $(this).prop('Counter',0).animate({Counter: $(this).text()},{
      duration: 4000,
      easing: 'swing',
      step: function(now){
          $(this).text(Math.ceil(now));
      }
    });
    // console.log($(this).prop('Counter'));
  });

});// document ready
