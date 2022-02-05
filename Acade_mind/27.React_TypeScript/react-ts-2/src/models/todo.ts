class Todo {
  id: string;
  text: string;
  check: string;

  constructor(todoText: string, todoCheck: string) {
    this.id = Math.random().toString();
    this.text = todoText;
    this.check = todoCheck;
  }
}

export default Todo;
