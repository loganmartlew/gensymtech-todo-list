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
}

const EditTodoModal: FC<Props> = ({ open, setOpen, todo }) => {
  const defaultValues = {
    title: todo?.title || '',
    description: todo?.description || '',
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

        <button type='submit'>Save Todo</button>
      </form>
    </Modal>
  );
};

export default EditTodoModal;
