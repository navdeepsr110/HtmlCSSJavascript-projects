// var a = document.querySelector("h1");
// a.forEach(function(el){
//     console.log(el);
// })
// window.addEventListener("click",function(){
    // a.style.backgroundColor="yellow";
    // a.innerHTML="Badal Gaya hu mai";
    // a.style.color="Red";
    // a.style.background="Yellow";
    // console.log("Hey");
// })
var a = document.querySelector("#bulb");
var b = document.querySelector("button");
var helper=0;
b.addEventListener("click",function(){
    if(helper == 0){
        a.style.backgroundColor="yellow";
        helper=1;
    }
    else{
        a.style.backgroundColor="transparent";
        helper=0;
    }
    
})