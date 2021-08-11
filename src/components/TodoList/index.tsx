import { FC } from 'react';
import Todo from '../../types/Todo';
import TodoItem from '../TodoItem';

interface Props {
  todos: Todo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default TodoList;
