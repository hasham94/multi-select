# I will use the following the approach

To build a multi-select component, I will break it down into three core components. Each of these components can also be used independently outside of the multi-select.

## Input
Input can further split into components to use with dropdown with displaying selected options or can be used as text field.

## DropDown
Drop Down contaier will display the available options and could possibly be splitted into
    1. DropDown Container
    2. List of Options (this can be used for other components as well)
    3. Single Option (this can also be used for other components)

## Select
Select will show the selected options as badge with the option  to remove, which can also be used for other components.

-------------------------------------------------------------------------------

# Added Features

 -- Input Wrapper (Branch: feature/add-input-wrapper)
 Added two components
 1. InputBase
 2. InputWithOptions

 -- DropDown (Branch: feature/add-dropdown-container)

 -- Chip (Branch: feature/add-select-list-and-option)
 -- ListItem (Branch: feature/add-select-list-and-option)