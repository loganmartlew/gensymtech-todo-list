import sortTodos from './sortTodos';

import todos from '../test-todos';

const getTodos = async () => {
  const sortedTodos = sortTodos(todos);

  return sortedTodos;
};

export default getTodos;
