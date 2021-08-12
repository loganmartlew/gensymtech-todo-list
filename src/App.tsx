import { useState, FC } from 'react';
import AddTodoModal from './components/EditTodoModal';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/todoContext';
import GlobalStyles from './styles/GlobalStyles';
import './styles/imports.css';

const App: FC = () => {
  const [addTodoOpen, setAddTodoOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <button
        onClick={() => {
          setAddTodoOpen(true);
        }}
      >
        open
      </button>
      <TodoProvider>
        <AddTodoModal open={addTodoOpen} setOpen={setAddTodoOpen} />
        <TodoList />
      </TodoProvider>
    </>
  );
};

export default App;
