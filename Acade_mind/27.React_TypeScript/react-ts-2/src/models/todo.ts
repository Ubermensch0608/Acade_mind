class Todo {
  id: string;
  text: string;
  time: string;

  constructor(todoText: string) {
    this.id = Math.random().toString();
    this.text = todoText;
    this.time = new Date().toLocaleString();
  }
}

export default Todo;
