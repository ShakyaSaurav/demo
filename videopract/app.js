const colors=['green','red','rgba(133,122,200)','f15025'];
const btn= document.getElementById('btn');
const color=document.querySelectorAll('.color');
btn.addEventListener('click', function(){
   const randomNumber = getRandomNumber; //for getting random number between 0 - 3
   console.log(randomNumber)
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent= colors[randomNumber];
});
function getRandomNumber(){
    return Math .floor(Math.random() * colors.length);
}