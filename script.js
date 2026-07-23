const cards=document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("click",()=>{
card.classList.toggle("liked");
});
});

const btn=document.querySelector(".theme-btn");

btn.onclick=()=>{
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
btn.innerHTML='<i class="fas fa-sun"></i>';
}
else{
btn.innerHTML='<i class="fas fa-moon"></i>';
}
};