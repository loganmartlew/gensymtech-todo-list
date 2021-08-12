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
import Checkbox from '../Checkbox';

interface Props {
  todo: Todo;
  dragHandleProps: DraggableProvidedDragHandleProps | undefined;
}

const TodoItem: FC<Props> = ({ todo, dragHandleProps }) => {
  const [editing, setEditing] = useState<boolean>(false);

  const { deleteTodo, updateTodo } = useTodo();

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

  const toggleComplete = () => {
    const newTodo: Todo = {
      ...todo,
      complete: !todo.complete,
    };

    updateTodo(todo.id, newTodo);
  };

  return (
    <TodoContainer>
      <EditTodoModal open={editing} setOpen={setEditing} todo={todo} />
      <DragIcon {...dragHandleProps}>
        <MdDragHandle />
      </DragIcon>
      <TodoHeading>
        <TodoTitle>{todo.title}</TodoTitle>
        <Checkbox value={todo.complete} onClick={toggleComplete} />
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
