var numberofbuttons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonstyle = (this.innerHTML);
       sound(buttonstyle); 
       Animation(buttonstyle); 
    });
    
}
document.addEventListener("Keypress",function(event){
    sound(event.buttonstyle);
    animation(event.buttonstyle);
})
function sound(buttonstyle){
    switch(buttonstyle){
    case "w":
        var audio1 = new Audio("tom-1.mp3");
        audio1.play();
        break;
    case "a":
        var audio2 = new Audio("tom-2.mp3");
        audio2.play();
        break;
    case "s":
        var audio3 = new Audio("tom-3.mp3");
        audio3.play();
        break;
    case "d":
        var audio4 = new Audio("tom-4.mp3");
        audio4.play();
        break;
    case "j":
        var audio5 = new Audio("crash.mp3");
        audio5.play();
        break;
    case "k":
        var audio6 = new Audio("kick-bass.mp3");
        audio6.play();
        break;
    case "l":
        var audio7 = new Audio("snare.mp3");
        audio7.play();
        break;
default:
    console.log(buttonstyle);
    }

}
function animation(currentKey){
    var activebutton = document.querySelector("."+currentKey);
    activebutton.classList.add("animation");
    setTimeout(function(){
        activebutton.classList.remove("animation");
    },100);
}

