import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 2px
`;

interface DropdownProps {
    children: React.ReactNode;
    isOpen: boolean;
    dropdownRef: React.Ref<HTMLDivElement>;
}

const Dropdown: React.FC<DropdownProps> = ({
    children,
    isOpen,
    dropdownRef,
}) => {
    if (!isOpen) return null;

    return <DropdownContainer role="listbox" ref={dropdownRef}>{children}</DropdownContainer>;
};

export default Dropdown