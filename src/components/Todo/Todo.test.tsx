import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Todo from './Todo';

describe("Todo", () => {
    test('renders provided description of task passed', () => {
        const mockTodo = {
            task: "Render a mock todo",
            toggleTodo: () => {},
            id: 1
        };
        const { getByText } = render(<Todo  {...mockTodo} />);
        const taskText = getByText(RegExp(mockTodo.task));
        expect(taskText).toBeInTheDocument();
    });

    test('renders a <li> element for every new task with a <span> element', () => {
        const mockTodo = {
            task: "Render a mock todo",
            toggleTodo: () => {},
            id: 2
        };
        const wrapper = shallow(<Todo {...mockTodo} />);
        expect(wrapper.find('li.Todo').length).toBe(1);
        expect(wrapper.find('li.Todo span').length).toBe(1);
        expect(wrapper.find('li.Todo span').text()).toEqual(mockTodo.task);
    });

    test('nothing renders if task prop is blank', () => {
        const mockTodo = {
            task: "",
            toggleTodo: () => {},
            id: 3
        };
        const wrapper = shallow(<Todo {...mockTodo} />);
        expect(wrapper.find('li.Todo').length).toBe(0);
    });

    test('UI - renders a normal & white colored task in case of incomplete', () => {
        const mockTodo = {
            task: "An Incomplete task",
            toggleTodo: () => {},
            id: 4
        };
        const wrapper = shallow(<Todo {...mockTodo} />);
        expect(wrapper.find('li.Todo').prop('style')).toHaveProperty('textDecoration', 'none');
        expect(wrapper.find('li.Todo span').prop('style')).toHaveProperty('color', 'white');
    });

    test('UI - renders a strikethroughed & grey colored task in case of completed', () => {
        const mockTodo = {
            task: "A Complete task",
            toggleTodo: () => {},
            completed: true,
            id: 5
        };
        const wrapper = shallow(<Todo {...mockTodo} />);
        expect(wrapper.find('li.Todo').prop('style')).toHaveProperty('textDecoration', 'line-through');
        expect(wrapper.find('li.Todo span').prop('style')).toHaveProperty('color', '#ccc');
    });

    test('calls toggleTodo method passed as props when clicked & passed id as paramter', () => {
        const mockTodo = {
            task: "A Complete task",
            toggleTodo: jest.fn(),      // mock function
            id: 5
        };
        const wrapper = shallow(<Todo {...mockTodo} />);
        wrapper.find('li.Todo').at(0).simulate('click', { currentTarget: { dataset: { id: mockTodo.id } }});
        expect(mockTodo.toggleTodo).toHaveBeenCalled();
        expect(mockTodo.toggleTodo).toBeCalledWith(mockTodo.id);
    });
});
