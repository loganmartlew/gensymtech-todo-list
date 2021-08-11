import { FC, Dispatch, SetStateAction } from 'react';
import Modal from '../Modal';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const AddTodoModal: FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      MODAL
    </Modal>
  );
};

export default AddTodoModal;
