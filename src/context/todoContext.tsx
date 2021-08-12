import { useState, useEffect, createContext, FC } from 'react';
import { getTodoRefById, todosRef } from '../util/firebase';
import Todo from '../types/Todo';
import { onSnapshot, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import arrangeTodos from '../util/arrangeTodos';

interface TodoContext {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
  updateTodoOrders: (todos: Todo[]) => void;
  includeCompleted: boolean;
  toggleCompletedTodos: () => void;
  loading: boolean;
}

// eslint-disable-next-line
export const TodoContext = createContext<TodoContext>({} as TodoContext);

export const TodoProvider: FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [includeCompleted, setIncludeCompleted] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const unsub = onSnapshot(todosRef, data => {
      const todos = data.docs.map(
        doc => ({ ...doc.data(), id: doc.id } as Todo)
      );

      const arrangedTodos = arrangeTodos(todos, includeCompleted);

      setTodos(arrangedTodos);
      setLoading(false);
    });

    return unsub;
  }, [includeCompleted]);

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

  const toggleCompletedTodos = () => {
    setIncludeCompleted(prev => !prev);
  };

  const value: TodoContext = {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    updateTodoOrders,
    includeCompleted,
    toggleCompletedTodos,
    loading,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
