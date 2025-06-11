let b1 = document.getElementById("b1");
let input = document.getElementById('input');
let todolist = document.querySelector(".list-elem")

const addToTodo = (e)=>{
    e.preventDefault();
    const divElem = document.createElement("div");
    divElem.classList.add("todolist");
    divElem.innerHTML = `<li></li>
                <button id="b2">Delete</button>`;
}

b1.addEventListener('click', (e)=>{
    addToTodo(e);
})