import Todo from '../types/Todo';

const mapIndexToOrder = (todos: Todo[]) => {
  const mappedTodos = todos.map((todo, idx) => {
    if (todo.isOrdered) {
      return {
        ...todo,
        order: idx,
      };
    }

    return todo;
  });

  return mappedTodos;
};

export default mapIndexToOrder;
