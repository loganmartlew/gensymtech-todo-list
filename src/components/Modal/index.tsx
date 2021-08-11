import { FC, Dispatch, SetStateAction, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { ModalPageWrapper, ModalContainer, ModalCloseBtn } from './ModalStyles';

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  overlayColor?: string;
  backgroundColor?: string;
}

const Modal: FC<Props> = ({ open, setOpen, children }) => {
  const wrapperClickHandler: MouseEventHandler = e => {
    if (!(e.target instanceof HTMLDivElement)) return;

    if (e.target.dataset.wrapper) {
      setOpen(false);
    }
  };

  const modalComponent = (
    <ModalPageWrapper onClick={wrapperClickHandler} data-wrapper>
      <ModalContainer>
        <ModalCloseBtn onClick={() => setOpen(false)}>
          <MdClose />
        </ModalCloseBtn>
        {children}
      </ModalContainer>
    </ModalPageWrapper>
  );

  return createPortal(
    open && modalComponent,
    document.getElementById('modal-root')!
  );
};

export default Modal;
