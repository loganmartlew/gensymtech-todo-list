import { useState, FC } from 'react';
import AddTodoModal from './components/AddTodoModal';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/todoContext';
import GlobalStyles from './styles/GlobalStyles';
import './styles/imports.css';

const App: FC = () => {
  const [addTodoOpen, setAddTodoOpen] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <TodoProvider>
        <AddTodoModal open={addTodoOpen} setOpen={setAddTodoOpen} />
        <TodoList />
        <button
          onClick={() => {
            setAddTodoOpen(true);
          }}
        >
          open
        </button>
      </TodoProvider>
    </>
  );
};

export default App;
