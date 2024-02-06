const b=document.querySelector(".butns2");

b.addEventListener("mouseover",mouseHover)
function mouseHover() {
   const i=Math.floor(Math.random()*500)+1;
   const j=Math.floor(Math.random()*500)+1;
   b.style.left=i+"px";
   b.style.top=j+"px";
  
}

const btn1=document.querySelector(".butns1");
const img=document.querySelector(".billa");
const h1=document.getElementById("crew")

 btn1.addEventListener("click", () => {
     h1.innerHTML="Yehh Finally!!"
     img.src='https://media.tenor.com/UllfOFyOaz4AAAAi/bubududu-sticker.gif';
     b.style.display="none";
     btn1.style.display="none";
 });


// function clicked(){
//     h1.innerHTML="Yehh Finally!!"
//     img.src='https://media.tenor.com/UllfOFyOaz4AAAAi/bubududu-sticker.gif';
//     b.style.display="none";
//     btn1.style.display="none";
// }