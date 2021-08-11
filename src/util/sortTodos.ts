import Todo from '../types/Todo';

const sortTodos = (todos: Todo[]) => {
  const sortedTodos = todos.sort((a, b) => {
    const orderedA = {
      ...a,
      order: a.isOrdered ? a.order! : Number.MAX_SAFE_INTEGER,
    };

    const orderedB = {
      ...b,
      order: b.isOrdered ? b.order! : Number.MAX_SAFE_INTEGER,
    };

    return orderedA.order - orderedB.order;
  });

  return sortedTodos;
};

export default sortTodos;
