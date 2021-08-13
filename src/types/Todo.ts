interface Todo {
  id: string;
  title: string;
  description?: string;
  complete: boolean;
  isOrdered: boolean;
  order?: number;
  size: 1 | 2 | 3 | 4 | 5;
}

export default Todo;
