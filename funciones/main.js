$(document).ready(function(){
    var r = 0;
    var altura = $('.menu').offset().top;
    //alert(altura);
    $(window).on('scroll',
    function(){        
        
        if($(window).scrollTop()> altura){
            $('.menu').addClass('menu-fixed')
            $('.menub').addClass('menu-fixed')
        }
        else{
            $('.menu').removeClass('menu-fixed')
            $('.menub').removeClass('menu-fixed')            
        }
    }
    )

    $( "#cerrar" ).on('click',
    function(){
        $('.menub').prop('checked', false);
    }
    )
    $( ".menub" ).on('click',
    function() {
        if( $(this).prop('checked')){

            $('.menub').prop('checked', false);
        }
     else{
        $('.menub').prop('checked', true);
        r=1;
        
     }   
      });
}
)
