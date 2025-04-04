import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from '../components/core/MultiSelect';

const meta: Meta<typeof MultiSelect> = {
    title: 'Components/MultiSelect',
    component: MultiSelect,
    tags: ['primary'],
    argTypes: {
        onChange: { action: 'selected' },
        options: {
            control: {
                type: 'object',
            },
        },
        selectedValues: {
            control: {
                type: 'object',
            },
        },
        placeholder: {
            control: {
                type: 'text',
            },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        isLoading: {
            control: {
                type: 'boolean',
            },
        },
        noOptionsMessage: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

const defaultOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
];

export const Default: Story = {
    args: {
        options: defaultOptions,
        selectedValues: [],
        placeholder: 'select...',
    },
};

export const WithSelectedValues: Story = {
    args: {
        options: defaultOptions,
        selectedValues: ['1', '4'],
    },
};

export const Disabled: Story = {
    args: {
        options: defaultOptions,
        selectedValues: [],
        disabled: true,
    },
};

export const LoadingState: Story = {
    args: {
        options: [],
        selectedValues: [],
        isLoading: true,
    },
};

export const NoOptions: Story = {
    args: {
        options: [],
        selectedValues: [],
        noOptionsMessage: 'no options',
    },
};

export const WithSearch: Story = {
    args: {
        options: [
            ...defaultOptions
        ],
        selectedValues: [],
    },
};