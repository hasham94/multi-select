import React from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div<{
    isSelected: boolean;
    disabled?: boolean;
}>`
  padding: 8px 12px;
  background-color: ${({ isSelected }) =>
        isSelected ? '#2684ff' : 'transparent'};
  color: ${({ isSelected, disabled }) =>
        disabled ? '#999' : isSelected ? 'white' : 'inherit'};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ListItemProps {
    children: React.ReactNode;
    isSelected: boolean;
    disabled?: boolean;
    onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
    children,
    isSelected,
    disabled,
    onClick
}) => {
    return (
        <ListItemContainer
            isSelected={isSelected}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </ListItemContainer>
    );
};

export default ListItem;