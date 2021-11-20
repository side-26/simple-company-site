function myFunction(x) {
    x.classList.toggle("change");
  }
  var menubar=document.getElementById("Hidden_menu");
  var container=document.getElementById("Icontainer");
  container.addEventListener("click",function(){
    menubar.classList.toggle("toggle");
  })
  document.getElementById("Untitled").innerHTML="© Untitled. All rights reserved.";