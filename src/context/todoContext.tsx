import { useState, useEffect, createContext, FC } from 'react';
import { todosRef } from '../util/firebase';
import subscribeToCollection from '../util/subscribeToCollection';
import Todo from '../types/Todo';

interface TodoContext {
  todos: Todo[];
}

const initialTodos: Todo[] = [];

const initialContext = {
  todos: initialTodos,
};

// eslint-disable-next-line
export const TodoContext = createContext<TodoContext>(initialContext);

export const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  useEffect(() => {
    const unsub = subscribeToCollection(todosRef, data => {
      const todos = data.docs.map(
        doc => ({ ...doc.data(), id: doc.id } as Todo)
      );

      setTodos(todos);
    });

    return unsub;
  }, []);

  const value = {
    todos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
