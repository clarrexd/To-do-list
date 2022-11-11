const REMOVE_TEXT = "Remove";
const appDiv = document.getElementById("app");
const button = document.getElementById("add-todo");
const inputField = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
function saveState(todos) {
    localStorage.setItem("todosState", JSON.stringify(todos));
}
function getState() {
    const todos = JSON.parse(localStorage.getItem("todosState"));
    if (todos === null) {
        console.log(localStorage);
        const defaultTodos = getDefaultTodos();
        saveState(defaultTodos);
        return defaultTodos;
    }
    return todos;
}
function initTodos() {
    todos.forEach((todo)=>{
        makeTodo(todo);
    });
}
const makeTodo = (todo)=>{
    const li = document.createElement("li");
    li.classList.add("row");
    const todoText = document.createElement("p");
    const removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger";
    todoText.innerText = todo.text;
    removeButton.innerText = REMOVE_TEXT;
    li.id = todo.id;
    removeButton.addEventListener("click", (_)=>removeTodo(todo.id));
    li.appendChild(todoText);
    li.appendChild(removeButton);
    todoList.appendChild(li);
};
let todos = getState();
initTodos();
function getDefaultTodos() {
    return [
        {
            id: 1,
            text: "Grocery shopping"
        },
        {
            id: 2,
            text: "Go to the bank"
        },
        {
            id: 3,
            text: "Call the insurance company"
        },
        {
            id: 4,
            text: "Go for a walk"
        },
        {
            id: 5,
            text: "Say hi to Sebastian"
        }
    ];
}
const refreshIndices = ()=>{
    todos = todos.map((todo, index)=>{
        todo.id = index + 1;
        return todo;
    });
    saveState(todos);
};
const removeTodo = (id)=>{
    const todoToRemove = todoList.children.item(id);
    if (todoToRemove) todoList.removeChild(todoToRemove);
    todos.splice(id - 1, 1);
    refreshIndices();
};
button.addEventListener("click", function() {
    if (!inputField.value) return;
    const newTodo = {
        id: todos.length + 1,
        text: inputField.value
    };
    makeTodo(newTodo);
    todos.push(newTodo);
    refreshIndices();
    let inputClear = document.getElementById("todo-input");
    inputClear.value = "";
});

//# sourceMappingURL=index.de158e3a.js.map
