class Todo {
  id: string;
  content: string;

  constructor(text: string) {
    this.id = new Date().toISOString();
    this.content = text;
  }
}

export default Todo;
