import { useState, useEffect, createContext, FC } from 'react';
import { getTodoRefById, todosRef } from '../util/firebase';
import Todo from '../types/Todo';
import { onSnapshot, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import sortTodos from '../util/sortTodos';

interface TodoContext {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
  updateTodoOrders: (todos: Todo[]) => void;
  loading: boolean;
}

// eslint-disable-next-line
export const TodoContext = createContext<TodoContext>({} as TodoContext);

export const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const unsub = onSnapshot(todosRef, data => {
      const todos = data.docs.map(
        doc => ({ ...doc.data(), id: doc.id } as Todo)
      );

      const sortedTodos = sortTodos(todos);

      setTodos(sortedTodos);
      setLoading(false);
    });

    return unsub;
  }, []);

  const addTodo = async (todo: Todo) => {
    await addDoc(todosRef, {
      title: todo.title,
      description: todo.description ?? '',
      complete: todo.complete,
    });
  };

  const deleteTodo = async (id: string) => {
    const todoRef = getTodoRefById(id);

    await deleteDoc(todoRef);
  };

  const updateTodo = async (id: string, todo: Todo) => {
    const todoRef = getTodoRefById(id);

    await updateDoc(todoRef, { ...todo });
  };

  const updateTodoOrders = async (todos: Todo[]) => {
    setTodos(todos);

    const promises = todos.map(async todo => {
      const todoRef = getTodoRefById(todo.id);

      return await updateDoc(todoRef, { ...todo });
    });

    await Promise.all(promises);
  };

  const value: TodoContext = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    updateTodoOrders,
    loading,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
