import { FC } from 'react';
import { useForm } from 'react-hook-form';
import useTodo from '../../hooks/useTodo';
import Modal from '../Modal';
import Todo from '../../types/Todo';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  todo?: Todo;
}

interface FormValues {
  title: string;
  description: string;
  size: 1 | 2 | 3 | 4 | 5;
}

const EditTodoModal: FC<Props> = ({ open, setOpen, todo }) => {
  const defaultValues = {
    title: todo?.title || '',
    description: todo?.description || '',
    size: todo?.size || 1,
  };

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
  });

  const { addTodo, updateTodo } = useTodo();

  const setOpenAndClearForm = (newValue: boolean) => {
    if (newValue === false) {
      reset();
    }

    setOpen(newValue);
  };

  const submit = (data: FormValues) => {
    if (todo) {
      const newTodo: Todo = {
        ...todo,
        title: data.title,
        description: data.description,
      };

      updateTodo(todo.id, newTodo);
    } else {
      const newTodo: Todo = {
        id: '',
        title: data.title,
        description: data.description,
        complete: false,
        isOrdered: false,
        size: data.size,
      };

      addTodo(newTodo);
    }
    setOpenAndClearForm(false);
  };

  return (
    <Modal open={open} setOpen={setOpenAndClearForm}>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor='title'>Title</label>
        <input type='text' {...register('title')} id='title' />

        <label htmlFor='description'>Description</label>
        <textarea {...register('description')} id='description' />

        <label htmlFor='size'>Project Size</label>
        <select {...register('size')} id='size'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>

        <button type='submit'>Save Todo</button>
      </form>
    </Modal>
  );
};

export default EditTodoModal;
