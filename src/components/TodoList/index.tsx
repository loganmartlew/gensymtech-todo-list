import { FC } from 'react';
import useTodo from '../../hooks/useTodo';
import TodoItem from '../TodoItem';

const TodoList: FC = () => {
  const { todos } = useTodo();

  return (
    <>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodoList;
