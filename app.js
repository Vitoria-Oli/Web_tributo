
 window.onload = init;
     function init(){
         document.querySelector(".icon_menu")[0].addEventListener("click", full_menu);
         document.querySelector(".full_menu").style.display = "none"; 
     }
    
    function full_menu(){
        var estado = document.querySelector(".full_menu").style.display;
        if (estado == "none"){
            document.querySelector(".full_menu").style.display = "block";
            console.log("llega :)")
        }
        else{
            document.querySelector(".full_menu").style.display = "none";            
        };
    }

    init();
    full_menu();