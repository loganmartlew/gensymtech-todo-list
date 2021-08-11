import { FC } from 'react';
import TodoList from './components/TodoList';

import todos from './test-todos';

const App: FC = () => {
  return <TodoList todos={todos} />;
};

export default App;
