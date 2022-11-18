// // window.onload = init;
// //      function init(){
// //          document.getElementById(icon_menu).addEventListener("click", full_menu_func);
// //          document.getElementById(full_menu).style.display = "none"; 
// //      }
    
// //     function full_menu_func(){
// //         var estado = document.getElementById(full_menu).style.display;
// //         if (estado == "none"){
// //             document.getElementById(full_menu).style.display = "block";
// //             console.log("llega :)")
// //         }
// //         else{
// //             document.getElementById(full_menu).style.display = "none";            
// //         };
// //     }






// const checker = new Boolean(false)


// function listener(){
//     document.getElementById('icon_menu').addEventListener('click', full_menu_func);
//     console.log("entra en listener");
// }

// function full_menu_func(){
//     console.log("entra en full menu funct");
//     if(checker = false){
//         console.log("entra en if")
//         document.getElementById('full_menu').style.display = "none";
//     }
//     else{
//         console.log("entra en else");
//         document.getElementById('full_menu').style.display = "block";
//     }
// }
// listener();
// full_menu_func();

const burguerButton = document.getElementById("icon_menu");
const dropdownMenu = document.getElementById("full_menu");
let dropdownMenuClass = dropdownMenu.classList;
console.log(dropdownMenuClass);
function openDropdownMenu(){
    if(dropdownMenuClass = "close"){
        dropdownMenu.classList.remove("close");
        dropdownMenu.classList.add("open");
    }
    else{
        dropdownMenu.classList.remove("open");
        dropdownMenu.classList.add("close");
    }
};

burguerButton.addEventListener("click", openDropdownMenu)
