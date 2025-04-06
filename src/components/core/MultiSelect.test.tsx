import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultiSelect from './MultiSelect';

const mockOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true },
    { value: '4', label: 'Option 4' },
];

describe('MultiSelect Component', () => {
    test('show placeholder when given', () => {
        render(
            <MultiSelect
                options={mockOptions}
                selectedValues={[]}
                onChange={() => { }}
                placeholder="Select..."
            />
        );
        expect(screen.getByPlaceholderText('Select...')).toBeInTheDocument();
    });

    test('shows selected values as chips with option to remove', () => {
        render(
            <MultiSelect
                options={mockOptions}
                selectedValues={['1', '4']}
                onChange={() => { }}
            />
        );
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 4')).toBeInTheDocument();
    });

    test('opens dropdown with list when clicked', async () => {
        render(
            <MultiSelect
                options={mockOptions}
                selectedValues={[]}
                onChange={() => { }}
            />
        );

        const input = screen.getByRole('textbox');
        await userEvent.click(input);

        expect(screen.getByRole('listbox')).toBeInTheDocument();
        expect(screen.getAllByRole('option')).toHaveLength(mockOptions.length);
    });
});