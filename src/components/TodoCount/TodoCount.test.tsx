import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import TodoCount from './TodoCount';

// Sample mock data
const mockTodos = [
    {
        task: "Render a mock todo",
        id: 1,
        completed: false
    },
    {
        task: "Render a 2nd mock todo",
        id: 2
    },
    {
        task: "Render a completed mock todo",
        id: 3,
        completed: true
    }
];

describe("TodoCount", () => {
    test('renders nothing if todos prop is empty', () => {
        const wrapper = shallow(<TodoCount todos={[]} />);
        expect(wrapper.find('div.TodoCount').length).toBe(0);
    });

    test('count label is found in document when todos prop is not empty', () => {
        const { getByText } = render(<TodoCount  todos={mockTodos} />);
        const taskText = getByText(/Total todos remaining/);
        expect(taskText).toBeInTheDocument();
    });

    test('renders proper count message acc to todos passed', () => {
        const wrapper = shallow(<TodoCount todos={mockTodos} />);

        expect(wrapper.find('div.TodoCount').length).toBe(1);
        expect(wrapper.find('.TodoCount-label').length).toBe(1);
        expect(wrapper.find('.TodoCount-label').text()).toEqual("Total todos remaining :");
        expect(wrapper.find('.TodoCount-count').length).toBe(1);
        expect(wrapper.find('.TodoCount-count').text()).toEqual("2 out of 3");
    });
});

