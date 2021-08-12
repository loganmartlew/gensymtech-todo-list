import Todo from '../types/Todo';
import sortTodos from './sortTodos';

const arrangeTodos = (todos: Todo[], includeCompleted: boolean) => {
  const incompleteTodos = todos.filter(todo => !todo.complete);
  const completeTodos = todos.filter(todo => todo.complete);

  const sortedIncompleteTodos = sortTodos(incompleteTodos);
  const sortedCompleteTodos = sortTodos(completeTodos);

  if (includeCompleted)
    return [...sortedIncompleteTodos, ...sortedCompleteTodos];

  return sortedIncompleteTodos;
};

export default arrangeTodos;
