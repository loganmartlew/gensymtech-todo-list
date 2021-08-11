import Todo from '../types/Todo';

const sortTodos = (todos: Todo[]) => {
  const sortedTodos = todos.sort((a, b) => {
    return a.priority - b.priority;
  });

  return sortedTodos;
};

export default sortTodos;
