interface Todo {
  id: string;
  title: string;
  description?: string;
  complete: boolean;
  isOrdered: boolean;
  order?: number;
}

export default Todo;
