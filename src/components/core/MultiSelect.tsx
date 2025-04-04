import React, { useState, useRef, useEffect } from 'react';
import InputWithOptions from '../ui/input/InputWithOptions';
import DropDown from '../ui/dropdown/DropDown';
import ListItem from '../ui/list/ListItem';
import Chip from '../ui/chip/Chip';
import { MultiSelectProps } from '../../types/MultiSelect';

const MultiSelect: React.FC<MultiSelectProps> = ({
    options,
    selectedValues,
    onChange,
    placeholder = 'Select',
    disabled = false,
    isLoading = false,
    noOptionsMessage = 'no options',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleOption = (value: string) => {
        const newSelectedValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];
        onChange(newSelectedValues);
    };

    const removeOption = (value: string, e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(selectedValues.filter((v) => v !== value));
    };

    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <InputWithOptions
                isFocused={isOpen}
                disabled={disabled}
                onClick={() => !disabled && !isOpen && setIsOpen(true)}
                inputProps={{
                    placeholder: selectedValues.length === 0 ? placeholder : '',
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    onFocus: () => !disabled && setIsOpen(true),
                    disabled,
                }}
                inputRef={inputRef}
            >
                {selectedValues.map((value) => {
                    const option = options.find((opt) => opt.value === value);
                    return (
                        option && (
                            <Chip key={value} onRemove={(e) => removeOption(value, e)}>
                                {option.label}
                            </Chip>
                        )
                    );
                })}
            </InputWithOptions>

            <DropDown isOpen={isOpen && !disabled} dropdownRef={dropdownRef}>
                {isLoading ? (
                    <div style={{ padding: '8px 12px', color: '#999', fontStyle: 'italic' }}>
                        Loading...
                    </div>
                ) : filteredOptions.length === 0 ? (
                    <div style={{ padding: '8px 12px', color: '#999', fontStyle: 'italic' }}>
                        {searchTerm ? 'No matches found' : noOptionsMessage}
                    </div>
                ) : (
                    filteredOptions.map(option => (
                        <ListItem
                            key={option.value}
                            isSelected={selectedValues.includes(option.value)}
                            disabled={option.disabled}
                            onClick={() => !option.disabled && toggleOption(option.value)}
                        >
                            {option.label}
                            <span>{selectedValues.includes(option.value) && 'selected'}</span>
                        </ListItem>
                    ))
                )}
            </DropDown>
        </div>
    );
};

export default MultiSelect;