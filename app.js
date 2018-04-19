


$(document).ready(function(){
    
    
    $("#homeButton").hide();
    $(".footer").hide();
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
          $(".navbar").css("background" , "#F7F7F7");
          $(".navbar a").css("color" , "black")
          $(".navbar").css('box-shadow', '1px black')
          $("#homeButton").fadeIn();
          $('.navbar').addClass('shadow-header');
          
          

          
        }
  
        else{
            $(".navbar").css("background" , "transparent");
            $(".navbar a").css("color" , "white")  
            $(".navbar").css('border-bottom', 'solid 0px transparent')
            $("#homeButton").hide();
            $('.navbar').removeClass('shadow-header');
        }
    })

    
  })



