
let b1 = document.getElementById("colour1");
let b2 = document.getElementById('colour2');
let code = document.getElementById('code');
let rgb1 = "#0000";
let rgb2 = "#ffff";
const generatecolour = () =>{
    let hexaValue = "0123456789abcdef";
    let color = '#';
    for(let i=0;i<6;i++){
        color += hexaValue[Math.floor(Math.random()*16)];
    }
    return color;
}

const getcolour1 = () =>{
    rgb1 = generatecolour();
    console.log(rgb1);
    b1.innerHTML = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`;
    code.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;
}

const getcolour2 = () =>{
    rgb2 = generatecolour();
    console.log(rgb2);
     b2.innerHTML = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1},${rgb2})`
    code.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`
}

b1.addEventListener('click',()=> getcolour1());
b2.addEventListener('click',()=>getcolour2());

code.addEventListener('clicl=k', ()=>{
    navigator.clipboard.writeText(code.innerText);
})