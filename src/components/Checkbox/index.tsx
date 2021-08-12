import { FC, ChangeEventHandler } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  value: any;
  onChange: ChangeEventHandler;
}

const CustomCheckbox = styled.input``;

const Checkbox: FC<Props> = ({ id, value, onChange }) => {
  return (
    <CustomCheckbox type='checkbox' id={id} value={value} onChange={onChange} />
  );
};

export default Checkbox;
