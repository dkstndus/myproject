$(function(){
  $(".flex_box .count").each(function(){
    $(this).prop('Counter',0).animate({Counter: $(this).text()},{
      duration: 4000,
      easing: 'swing',
      step: function(now){
          $(this).text(Math.ceil(now));
      }
    });
  });

  $(".nav_contact a").click(function(){
    $("#contact_popup").fadeIn().css("display","block");
    $(".close_btn").click(function(){
      $("#contact_popup").css("display","none");
    });
  });
});
