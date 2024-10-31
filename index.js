var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.list = document.getElementById('todo-list');
    }
    TodoList.prototype.addItem = function (task) {
        var _a;
        // create new task
        var newTodo = {
            id: Math.floor(Math.random() * 1000),
            task: task,
            completed: false,
        };
        // add task to array
        this.todos.push(newTodo);
        // create html li element
        var li = document.createElement('li');
        li.textContent = task;
        // append element to parent
        (_a = this.list) === null || _a === void 0 ? void 0 : _a.appendChild(li);
    };
    TodoList.prototype.getTodoList = function () {
        return this.todos;
    };
    return TodoList;
}());
var todoList = new TodoList();
todoList.addItem('Buy groceries');
todoList.addItem('Finish homework');
console.log(todoList.getTodoList());
