import { useState, FC } from 'react';
import AddTodoModal from './components/EditTodoModal';
import { AuthProvider } from './context/authContext';
import { TodoProvider } from './context/todoContext';
import Header from './components/Header';
import TodoList from './components/TodoList';
import GlobalStyles from './styles/GlobalStyles';
import './styles/imports.css';

const App: FC = () => {
  const [addTodoOpen, setAddTodoOpen] = useState<boolean>(false);

  const openAddModal = () => {
    setAddTodoOpen(true);
  };

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Header openAddModal={openAddModal} />
        <TodoProvider>
          <AddTodoModal open={addTodoOpen} setOpen={setAddTodoOpen} />
          <TodoList />
        </TodoProvider>
      </AuthProvider>
    </>
  );
};

export default App;
