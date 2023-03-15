let screen1 = document.querySelector(".option-one-screen");
let screen2 = document.querySelector(".option-two-screen");
let button1=document.querySelector(".classroom-one");
let button2=document.querySelector(".classroom-two");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");

button1.onclick=function(){
  screen1.style.display = "block";
};
button2.onclick=function(){
  screen2.style.display = "block";
};


   screen1.onclick=function(){
  optionOneEnd.style.display = "block"; 
};
screen2.onclick=function(){
  optionTwoEnd.style.display = "block";

};
