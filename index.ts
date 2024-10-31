interface ITodoItem {
    id: number;
    task: string;
    completed: boolean;
  }
  
  class TodoList {
    private todos: ITodoItem[];
    private list: HTMLElement | null;
  
    constructor() {
      this.todos = [];
      this.list = document.getElementById('todo-list');
    }
  
    addItem(task: string): void {
      // create new task
      const newTodo: ITodoItem = {
        id: Math.floor(Math.random() * 1000),
        task,
        completed: false
      };
  
      // add task to array
      this.todos.push(newTodo);
  
      // create html li element
      const li = document.createElement('li');
      li.textContent = task;
  
      // append element to parent
      this.list?.appendChild(li);
    }
  
    getTodoList(): ITodoItem[] {
      return this.todos;
    }
  }
  
  const todoList = new TodoList();
  
  todoList.addItem('Buy groceries');
  todoList.addItem('Finish homework');
  
  console.log(todoList.getTodoList());