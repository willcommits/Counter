const value=document.querySelector("#value");
const num=document.querySelector(".num");
const btns=document.querySelectorAll(".btn");
let count=0;
btns.forEach(function(btn){
 btn.addEventListener('click',function(e){
const btnclass=e.currentTarget.classList;
if(btnclass.contains('decrease')){
    count-=1;
}
if(btnclass.contains("reset")){
    count=0;
}
if(btnclass.contains("increase")){
    count+=1;
}
if(count>0){
    num.style.color="green";
}
if(count<0){
    num.style.color="red";
}
if(count===0){
    num.style.color="#222";
}

value.textcontent=count;
num.innerHTML=count;

 })
})