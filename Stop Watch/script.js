let count = 0;
let timer;
const display = document.getElementById("display");
const scroll = document.getElementById("scroll");
let startTimer = () =>{
    timer = setInterval(() => {
        count++;
        display.innerText = count;
    },1000);
}
let stopTimer = () => {
    clearInterval(timer);
    timer = null;
}
let resetTimer = () => {
    count = 0;
    display.innerText = 0;
}
let getTime = () => {
    const para = document.createElement("p");
    para.style.color = "#ffff"
    para.style.textAlign = "center";
    para.textContent = `Time: ${count} seconds`;
    scroll.appendChild(para);
    scroll.scrollTop = scroll.scrollHeight;
}   
let clear = () => {
    scroll.innerHTML = "";
}
b1.addEventListener("click",startTimer)
b2.addEventListener("click",stopTimer)
b3.addEventListener("click",resetTimer)
b4.addEventListener("click",getTime);
b5.addEventListener("click",clear);