import styled from 'styled-components';

interface CheckboxProps {
  value: boolean;
  fillColor: string;
  borderColor: string;
}

export const CustomCheckbox = styled.span<CheckboxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.4em;
  height: 1.4em;
  border: 2px solid;
  border-color: ${({ value, fillColor, borderColor }) =>
    value ? fillColor : borderColor};
  border-radius: 100%;

  background: ${({ value, fillColor }) => (value ? fillColor : 'none')};

  transition: border-color 100ms, background-color 100ms;
`;

interface IconProps {
  value: boolean;
  shown: boolean;
  iconColor: string;
  borderColor: string;
}

export const CheckIcon = styled.span<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ shown }) => (shown ? '1' : '0')};
  font-size: 1em;

  color: ${({ value, iconColor, borderColor }) =>
    value ? iconColor : borderColor};

  transition: opacity 100ms, color 100ms;
`;
