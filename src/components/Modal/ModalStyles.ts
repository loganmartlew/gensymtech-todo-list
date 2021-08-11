import styled from 'styled-components';

export const ModalPageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: clamp(0.5em, 5%, 2em);
  background: hsla(0, 0%, 0%, 0.3);
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: #fff;
  height: 100%;
  padding: clamp(0.5em, 5%, 3em);
  padding-top: min(2.5em);
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 0.9em;
  right: 0.9em;
  border: none;
  background: none;
  font-size: 20px;
`;
