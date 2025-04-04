import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
`;

interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
    ref?: Ref<HTMLInputElement>;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
    (props, ref) => {
        return <StyledInput ref={ref} {...props} />;
    }
);

export default InputBase