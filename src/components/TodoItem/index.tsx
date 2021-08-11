import { FC } from 'react';
import Todo from '../../types/Todo';

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <li>
      <div>
        <span>{todo.title}</span>
      </div>
      <div>
        {todo.description ? (
          <span>{todo.description}</span>
        ) : (
          <span>No description.</span>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
