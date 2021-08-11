import { FC } from 'react';
import { MdDragHandle } from 'react-icons/md';
import {
  TodoContainer,
  DragIcon,
  TodoHeading,
  TodoTitle,
  TodoContent,
  TodoDescription,
} from './TodoItemStyles';
import Todo from '../../types/Todo';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

interface Props {
  todo: Todo;
  dragHandleProps: DraggableProvidedDragHandleProps | undefined;
}

const TodoItem: FC<Props> = ({ todo, dragHandleProps }) => {
  return (
    <TodoContainer>
      <TodoHeading>
        <DragIcon {...dragHandleProps}>
          <MdDragHandle />
        </DragIcon>
        <TodoTitle>{todo.title}</TodoTitle>
      </TodoHeading>
      <TodoContent>
        <TodoDescription>
          {todo.description || 'No description.'}
        </TodoDescription>
      </TodoContent>
    </TodoContainer>
  );
};

export default TodoItem;
