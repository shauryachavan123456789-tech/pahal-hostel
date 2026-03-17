function sendBooking(e){
e.preventDefault();

let name=document.getElementById("name").value;
let mobile=document.getElementById("mobile").value;
let room=document.getElementById("room").value;


document.getElementById("popup").style.display="flex";

setTimeout(()=>{
let msg=`Name:${name}%0AMobile:${mobile}%0ARoom:${room}`;
window.open(`https://wa.me/918830575044?text=${msg}`);
},1500);
}

function closePopup(){
document.getElementById("popup").style.display="none";
}

function toggle(el){
el.classList.toggle("active");
}

const reviews=[
"Living here is safe, clean, and peaceful with supportive staff and excellent facilities.",
"This hostel stands out because of its cleanliness, proper security, and comfortable rooms.",
"The location is convenient and the environment is positive and homely.",
"One of the best hostels in Latur with a great study and living atmosphere."
];

let i=0;

function startReviews(){
let box=document.getElementById("review");
if(!box) return;

box.innerText=reviews[0];

setInterval(()=>{
box.style.opacity=0;

setTimeout(()=>{
i=(i+1)%reviews.length;
box.innerText=reviews[i];
box.style.opacity=1;
},300);

},4000);
}

document.addEventListener("DOMContentLoaded", startReviews);