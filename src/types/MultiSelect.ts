export interface Option {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface MultiSelectProps {
    options: Option[];
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    isLoading?: boolean;
    noOptionsMessage?: string;
    searchable?: boolean;
}