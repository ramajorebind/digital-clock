function clock(){


let hours=document.getElementById("hrs");
let minutes=document.getElementById("min");
let second=document.getElementById("sec");
let amPm = document.getElementById("am-pm");

let date = new Date();
let a = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
a = a < 10 ? "0" + a : a;
let am_pm =  date.getHours() >= 12 ? "PM" : "AM";
let b = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
let c = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();




// let time=new Date();
// let a=time.getHours();
// let b=time.getMinutes();
// let c=time.getSeconds();

hours.innerHTML=a;
minutes.innerHTML=b;
second.innerHTML=c; 
amPm.innerText=am_pm


}
setInterval(clock,1000);

function makediv(){
let container=document.createElement('div')
container.id="dynamic-block";

document.getElementById('grid-container').appendChild(container);
}

function settime(){
let i=document.getElementById('select-time').Value;
let hourr=new Date().getHours();


if(i==hourr){
    document.getElementById('select-time2').style.backgroundImage="url(lunch_image@2x.png)";
    document.getElementById('select-time2').innerHTML="Lets Have Some Breakfast";
}

Makediv();

}