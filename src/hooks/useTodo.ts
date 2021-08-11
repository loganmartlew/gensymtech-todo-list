import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';

const useTodo = () => {
  return useContext(TodoContext);
};

export default useTodo;
