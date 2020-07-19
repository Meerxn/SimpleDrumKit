var audio = new Audio('sounds/tom-1.mp3');

for (i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    //Adding event listener to anon function
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
            this.setAttribute("style","color: red");
        
        
    });
}

