

function initHamburger(){
                $("#humburger-button .fa-times").hide();

                $(".hamburger-btn .fa-bars").click(function(){
                    $(this).hide();
                    $(".hamburger-btn .fa-times").show();
                    $(".mob .menu").addClass("active");
                });

                $(".hamburger-btn .fa-times").click(function(){
                    $(this).hide();
                    $(".hamburger-btn .fa-bars").show();
                    $(".mob .menu").removeClass("active");
                    
                });

                
               
                $(".mob .menu .one").click(function(){
                    $(".submenu").toggleClass("active");
                    
                });

                
                $(".mob .menu .two").click(function(){
                    $(".submenu1").toggleClass("active");
                    
                });

               
                $(".mob .menu .three").click(function(){
                    $(".submenu2").toggleClass("active");
                    
                });

}