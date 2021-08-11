import { useState, useEffect, createContext, FC } from 'react';
import Todo from '../types/Todo';
import getTodos from '../util/getTodos';

interface TodoContext {
  todos: Todo[];
}

const initialTodos: Todo[] = [];

const initialContext = {
  todos: initialTodos,
};

export const TodoContext = createContext<TodoContext>(initialContext);

export const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  useEffect(() => {
    getTodos().then(todos => setTodos(todos));
  }, []);

  const value = {
    todos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
