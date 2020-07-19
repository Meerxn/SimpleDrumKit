

for (i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
    //Adding event listener to anon function
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      var button = this.innerHTML; // this stands for the current one that has been clicked and uses the anon function 
    
       sound(button);     
        
        
    });

}
//event is what triggered the key press hence event has a .key attricbute to check for. 
document.addEventListener("keydown",function(event){
    sound(event.key);

});
function sound(key){
    switch(key){
        case "w":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
        case "a":
          var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
          break;
         case "s" :
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
         break;
         case "d" :
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
         break;
         case "j" :
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
         break;
         case "k" :
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
         break;
         case "l" :
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;

          default:

    }  

}

