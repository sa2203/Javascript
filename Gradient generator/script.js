const b1 = document.getElementById("colour1");
const b2 = document.getElementById("colour2");
const code = document.getElementById("code");

let rgb1 = "#ffff";
let rgb2 = "#0000";

const generateColour = () => {
    const hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

const updateUI = () => {
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    code.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;

    b1.innerText = rgb1;
    b1.style.backgroundColor = rgb1;

    b2.innerText = rgb2;
    b2.style.backgroundColor = rgb2;
};

b1.addEventListener("click", () => {
    rgb1 = generateColour();
    updateUI();
});

b2.addEventListener("click", () => {
    rgb2 = generateColour();
    updateUI();
});

code.addEventListener("click", () => {
    navigator.clipboard.writeText(code.innerText);
});