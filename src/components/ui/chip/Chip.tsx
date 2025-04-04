import React from 'react';
import styled from 'styled-components';

const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e1e1e1;
  border-radius: 16px;
  padding: 2px 8px;
  font-size: 14px;
`;

const ChipRemove = styled.span`
  margin-left: 4px;
  cursor: pointer;
  font-size: 12px;
  color: #666;

  &:hover {
    color: #333;
  }
`;

interface ChipProps {
  children: React.ReactNode;
  onRemove: (e: React.MouseEvent) => void;
}

const Chip: React.FC<ChipProps> = ({ children, onRemove }) => {
  return (
    <ChipContainer>
      {children}
      <ChipRemove onClick={onRemove}>
        {/* this we can replace with icon */}
        x
      </ChipRemove>
    </ChipContainer>
  );
};

export default Chip