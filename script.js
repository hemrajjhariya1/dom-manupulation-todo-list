function loadTodos() {
    // this function will load the todos from the browser
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList": []}; // agar todos key ke co-responding me koi value hai to vo aayega nhi to empty array retrin hoga
    console.log(todos);    // json.parse array me convert karta hai
    return todos;
}

function addTodoTolocalStorage(todo){
    const todos = loadTodos();
    todos.todoList.push(todo);  
    localStorage.setItem("todos", JSON.stringify(todos));

}


function appendTodoInHtml(todo){
    const todoList = document.getElementById("todoList");

    const todoItem = document.createElement("li");

    const textDiv = document.createElement("div");

    textDiv.textContent = todo.Text;
    todoItem.classList.add("todoItem"); //sare item me class ke ander rakh dega


    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons")

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "completed";
    completedBtn.classList.add("completedBtn");

    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completedBtn);

    todoItem.appendChild(textDiv)
    todoItem.appendChild(wrapper);

    todoList.appendChild(todoItem);

}

    document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("TodoInput");
    const submitButton = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");
    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value;
        if (todoText ==''){
            alert ("Please write something for the todo");
        } else {
            addTodoTolocalStorage({text: todoText, isCompleted: false});
            appendTodoInHtml({text: todoText, isCompleted: false});
            todoInput.value= ''; 
        }
    });


    todoInput.addEventListener("change", (event) => {
        // this call back method is fired everytime there is a change is the inputs
        const todoText = event.target.value;
        event.target.value = todoText.trim();
        console.log(todoText)
        
    })

 
    const todos = loadTodos();
    todos.todoList.forEach(todo => {
        appendTodoInHtml(todo); // oneeche comment kiye code ki jagah ye likhne par poore list me apply hoga

        // const newTodoItem = document.createElement("li")
        // newTodoItem.textContent = todo;
        // todoList.appendChild(newTodoItem);   // ye code ki bjah se purane create list me edit, delete aur completed btn nhi aa rhe the
    });

});