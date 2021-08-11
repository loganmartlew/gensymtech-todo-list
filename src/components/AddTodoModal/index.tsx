import { FC } from 'react';
import { useForm } from 'react-hook-form';
import useTodo from '../../hooks/useTodo';
import Modal from '../Modal';
import Todo from '../../types/Todo';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

interface FormValues {
  title: string;
  description: string;
}

const AddTodoModal: FC<Props> = ({ open, setOpen }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { addTodo } = useTodo();

  const setOpenAndClearForm = (newValue: boolean) => {
    if (newValue === false) {
      reset();
    }

    setOpen(newValue);
  };

  const submit = (data: FormValues) => {
    const newTodo: Todo = {
      id: '',
      title: data.title,
      description: data.description,
      complete: false,
      isOrdered: false,
    };

    addTodo(newTodo);
    setOpenAndClearForm(false);
  };

  return (
    <Modal open={open} setOpen={setOpenAndClearForm}>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor='title'>Title</label>
        <input type='text' {...register('title')} id='title' />

        <label htmlFor='description'>Description</label>
        <textarea {...register('description')} id='description' />

        <button type='submit'>Add Todo</button>
      </form>
    </Modal>
  );
};

export default AddTodoModal;
