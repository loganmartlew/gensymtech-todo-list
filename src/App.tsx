import { FC } from 'react';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/todoContext';

const App: FC = () => {
  return (
    <>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </>
  );
};

export default App;
