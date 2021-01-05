$(function(){
  // skill count
  $(".flex_box .count").each(function(){
    $(this).prop('Counter',0).animate({Counter: $(this).text()},{
      duration: 4000,
      easing: 'swing',
      step: function(now){
          $(this).text(Math.ceil(now));
      }
    });
  });

 //popup
  $(".nav_contact a").click(function(){
    $("#contact_popup").fadeIn().css("display","block");
    $(".close_btn").click(function(){
      $("#contact_popup").css("display","none");
    });
  });

  //portfolio list순서바꾸기

  // $("#nav .nav_list li:nth-of-type(4) a").click(function(){
  //   $(".list_wrap").prepend('<div class="list_inner"><div class="list"><a href="portfolio02.html"><img src="images/images/img_thum03.jpg" alt="portfolio_img_thum03"></a><div class="list_name"><p><a href="portfolio02.html">GURM BY H</a></p><div class="list_file"><P>HTML</P><P>CSS</P><P>SASS</P></div></div></div></div>');
  // });


});
