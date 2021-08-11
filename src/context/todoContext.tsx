import { useState, useEffect, createContext, FC } from 'react';
import Todo from '../types/Todo';

interface TodoContext {
  todos: Todo[];
}

const TodoContext = createContext<Partial<TodoContext>>({});

export const TodoProvider: FC = ({ children }) => {
  return <TodoContext.Provider value={{}}></TodoContext.Provider>;
};
