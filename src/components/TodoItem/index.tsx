import { FC } from 'react';
import Todo from '../../types/Todo';

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  return <div>{todo.title}</div>;
};

export default TodoItem;
