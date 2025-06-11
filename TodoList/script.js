let b1 = document.getElementById("b1");
let input = document.getElementById("input");
let todolist = document.querySelector(".list-elem");

const getTodo = () => {
    return JSON.parse(localStorage.getItem("todoList")) || [];
};

const addLocalStorage = (localList) => {
    localStorage.setItem("todoList", JSON.stringify(localList));
};

let locallist = getTodo();

const addToTodo = (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();
    if (inputValue !== "" && !locallist.includes(inputValue)) {
        locallist.push(inputValue);
        addLocalStorage(locallist);
        createListItem(inputValue);
    }
    input.value = "";
};

const createListItem = (text) => {
    const li = document.createElement("li");
    li.textContent = text;

    const b2 = document.createElement("button");
    b2.textContent = "Delete";
    b2.classList.add("b2");

    b2.addEventListener("click", () => {
        li.remove();
        locallist = locallist.filter((todo) => todo !== text);
        addLocalStorage(locallist);
    });

    li.appendChild(b2);
    todolist.appendChild(li);
};

const showTodo = () => {
    locallist.forEach((currEle) => {
        createListItem(currEle);
    });
};

// Initial display
showTodo();

// Add new todo
b1.addEventListener("click", addToTodo);
