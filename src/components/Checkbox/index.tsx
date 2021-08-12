import { useState, FC, MouseEventHandler } from 'react';
import { MdCheck } from 'react-icons/md';
import { CheckIcon, CustomCheckbox } from './CheckboxStyles';

interface Props {
  value: boolean;
  onClick: MouseEventHandler;
  fillColor?: string;
  borderColor?: string;
  iconColor?: string;
}

const defaultProps: Props = {
  value: false,
  onClick: () => {},
  fillColor: 'blue',
  borderColor: 'black',
  iconColor: 'white',
};

const Checkbox: FC<Props> = ({
  value,
  onClick,
  fillColor,
  borderColor,
  iconColor,
}) => {
  const [checkShown, setCheckShown] = useState<boolean>(value);

  const mouseEnter = () => {
    setCheckShown(true);
  };

  const mouseLeave = () => {
    setCheckShown(value);
  };

  return (
    <CustomCheckbox
      value={value}
      onClick={onClick}
      fillColor={fillColor!}
      borderColor={borderColor!}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <CheckIcon
        value={value}
        shown={checkShown}
        iconColor={iconColor!}
        borderColor={borderColor!}
      >
        <MdCheck />
      </CheckIcon>
    </CustomCheckbox>
  );
};

Checkbox.defaultProps = defaultProps;

export default Checkbox;
