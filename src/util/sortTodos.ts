import Todo from '../types/Todo';

const compareTodos = (a: Todo, b: Todo) => {
  const orderedA = {
    ...a,
    order: a.isOrdered ? a.order! : Number.MAX_SAFE_INTEGER,
  };

  const orderedB = {
    ...b,
    order: b.isOrdered ? b.order! : Number.MAX_SAFE_INTEGER,
  };

  return orderedA.order - orderedB.order;
};

const sortTodos = (todos: Todo[]) => {
  const incompleteTodos = todos.filter(todo => !todo.complete);
  const completeTodos = todos.filter(todo => todo.complete);

  const sortedIncompleteTodos = incompleteTodos.sort(compareTodos);
  const sortedCompleteTodos = completeTodos.sort(compareTodos);

  return [...sortedIncompleteTodos, ...sortedCompleteTodos];
};

export default sortTodos;
