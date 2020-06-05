import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoList from './TodoList';

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
const mockToggleTodo = () => {};

describe("TodoList", () => {
    test('renders a <ul> element', () => {
        const wrapper = shallow(<TodoList todos={mockTodos} toggleTodo={mockToggleTodo} />);
        expect(wrapper.find('ul').length).toBe(1);
    });

    test('nothing is rendered if todos list is empty', () => {
        const wrapper = shallow(<TodoList todos={[]} toggleTodo={mockToggleTodo} />);
        expect(wrapper.find('ul').length).toBe(0);
    });

    test('renders correct number of children i.e <li> items', () => {
        const wrapper = mount(<TodoList todos={mockTodos} toggleTodo={mockToggleTodo} />);
        expect(wrapper.find('ul').children().length).toBe(mockTodos.length);
        expect(wrapper.find('li').length).toBe(mockTodos.length);
    });

    test('toggleTodo method passed as props is called when clicked on children <li> item', () => {
        const toggleTodoToBeCalled = jest.fn();   // mock function
        const wrapper = mount(<TodoList todos={mockTodos} toggleTodo={toggleTodoToBeCalled} />);

        // on 1st element click, toggleTodoToBeCalled method should be executed with id of that item as argument
        wrapper.find('li.Todo').at(0).simulate('click', { currentTarget: { dataset: { id: mockTodos[0].id } }});
        expect(toggleTodoToBeCalled).toHaveBeenCalled();
        expect(toggleTodoToBeCalled).toBeCalledTimes(1);
        expect(toggleTodoToBeCalled).toBeCalledWith(mockTodos[0].id);

        // on 2nd element click, toggleTodoToBeCalled method should be executed with id of that item as argument
        wrapper.find('li.Todo').at(1).simulate('click', { currentTarget: { dataset: { id: mockTodos[1].id } }});
        expect(toggleTodoToBeCalled).toHaveBeenCalled();
        expect(toggleTodoToBeCalled).toBeCalledTimes(2);
        expect(toggleTodoToBeCalled).toBeCalledWith(mockTodos[1].id);
    });
});