import { useState, FC, MouseEventHandler } from 'react';
import { MdDragHandle, MdEdit, MdDelete } from 'react-icons/md';
import {
  TodoContainer,
  DragIcon,
  TodoHeading,
  TodoTitle,
  TodoContent,
  TodoDescription,
} from './TodoItemStyles';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import useTodo from '../../hooks/useTodo';
import Todo from '../../types/Todo';
import EditTodoModal from '../EditTodoModal';

interface Props {
  todo: Todo;
  dragHandleProps: DraggableProvidedDragHandleProps | undefined;
}

const TodoItem: FC<Props> = ({ todo, dragHandleProps }) => {
  const [editing, setEditing] = useState<boolean>(false);

  const { deleteTodo } = useTodo();

  const handleEdit: MouseEventHandler = e => {
    e.preventDefault();

    setEditing(true);
  };

  const handleDelete: MouseEventHandler = e => {
    e.preventDefault();

    const confirmDelete = window.confirm(
      `Are you sure you want to delete '${todo.title}?'`
    );

    if (confirmDelete) deleteTodo(todo.id);
  };

  return (
    <TodoContainer>
      <EditTodoModal open={editing} setOpen={setEditing} todo={todo} />
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
      <div>
        <button onClick={handleEdit}>
          <MdEdit />
        </button>
        <button onClick={handleDelete}>
          <MdDelete />
        </button>
      </div>
    </TodoContainer>
  );
};

export default TodoItem;
