import Todo from '../types/Todo';

const mapIndexToOrder = (todos: Todo[]) => {
  const mappedTodos = todos.map((todo, idx) => {
    return {
      ...todo,
      isOrdered: true,
      order: idx,
    };
  });

  return mappedTodos;
};

export default mapIndexToOrder;
