var istatus = document.querySelector("h5");

var addFriend = document.querySelector("#add");

// var removeFriend = document.querySelector("#remove");

var helper = 0;

addFriend.addEventListener("click",function(){

   if(helper==0) {
      istatus.innerHTML = "Your Mom";
      istatus.style.color = "green";
      addFriend.innerHTML = "Remove";
      helper=1;
   }
      else{
           istatus.innerHTML = "Mom of Universe";
           istatus.style.color = "Red";
           addFriend.innerHTML = "Add Mother";
           helper=0;
    }
});

// removeFriend.addEventListener("click",function(){
//    istatus.innerHTML = "Mom of Universe";
//    istatus.style.color = "Red";
//    addFriend.innerHTML = "Add Mother";
// })