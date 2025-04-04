import React from 'react';
import styled from 'styled-components';
import InputBase from './InputBase';

const InputContainer = styled.div<{ isFocused: boolean; disabled?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#2684ff' : '#ccc')};
  border-radius: 4px;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  min-height: 40px;
  transition: all 0.2s;

  &:focus-within {
    border-color: #2684ff;
  }
`;

interface InputWithOptionsProps {
    children?: React.ReactNode;
    isFocused: boolean;
    disabled?: boolean;
    onClick?: () => void;
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
    inputRef: React.Ref<HTMLInputElement>;
}

const InputWithOptions: React.FC<InputWithOptionsProps> = ({
    children,
    isFocused,
    disabled,
    onClick,
    inputProps,
    inputRef,
}) => {
    return (
        <InputContainer
            isFocused={isFocused}
            disabled={disabled}
            onClick={onClick}
        >
            {children ? children : null}
            <InputBase ref={inputRef} disabled={disabled} {...inputProps} />
        </InputContainer>
    );
};

export default InputWithOptions;