const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const changeName = document.querySelector("#change-name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function changeUserName() {
    greeting.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);
    todoList.classList.add(HIDDEN_CLASSNAME);
    changeName.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem("username");
    loginInput.value = "";
    greeting.textContent = "";
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.textContent = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    changeName.classList.remove(HIDDEN_CLASSNAME);
    changeName.addEventListener("click", changeUserName);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    paintGreetings(savedUsername);
}
