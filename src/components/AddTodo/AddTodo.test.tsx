import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './AddTodo';

const mockAddTodo = jest.fn();

describe("AddTodo", () => {
    test('renders a container div with class AddTodo', () => {
        const wrapper = shallow(<AddTodo addTodo={mockAddTodo}/>);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div.AddTodo').length).toBe(1);
    });

    test('renders an input element with placeholder & class AddTodo-input', () => {
        const wrapper = shallow(<AddTodo addTodo={mockAddTodo}/>);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('input.AddTodo-input').length).toBe(1);
        expect(wrapper.find('input').prop('placeholder')).toEqual("Enter New task");
    });

    test('renders a button element with proper text & class AddTodo-btn', () => {
        const wrapper = shallow(<AddTodo addTodo={mockAddTodo}/>);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button.AddTodo-btn').length).toBe(1);
        expect(wrapper.find('button').text()).toEqual("+ Add Task");
    });

    test('button is disabled initially as input value is empty', () => {
        const wrapper = shallow(<AddTodo addTodo={mockAddTodo}/>);
        expect(wrapper.find('button').prop('disabled')).toBeTruthy();

        expect(mockAddTodo).not.toHaveBeenCalled();     // as btn is disabled so nothing will be triggered
    });

    test('button enables as text changes actually i.e considering trimmed value', () => {
        const wrapper = shallow(<AddTodo addTodo={mockAddTodo}/>);
        expect(wrapper.find('button').prop('disabled')).toBeTruthy();

        wrapper.find('.AddTodo-input').simulate('change', {
            currentTarget: {
              value: '     '
            },
        });
        expect(wrapper.find('button').prop('disabled')).toBeTruthy();   // as value is still blank after trim()

        wrapper.find('.AddTodo-input').simulate('change', {
            currentTarget: {
              value: 'Another task'
            },
        });
        expect(wrapper.find('button').prop('disabled')).toBeFalsy();

        wrapper.find('.AddTodo-input').simulate('change', {
            currentTarget: {
              value: '  Another task  '
            },
        });
        expect(wrapper.find('button').prop('disabled')).toBeFalsy();
    });

    test('addTodo is called on button click when input value is not empty; And resets the value of input', () => {    
        const wrapper = shallow(<AddTodo addTodo={mockAddTodo}/>);

        wrapper.find('.AddTodo-btn').simulate('click', null);
        expect(mockAddTodo).not.toHaveBeenCalled();     // as disabled

        const mockTask = 'Another task';
        wrapper.find('.AddTodo-input').simulate('change', {
            currentTarget: {
              value: mockTask
            },
        });
        wrapper.find('.AddTodo-btn').simulate('click', null);   // now btn is enabled
        expect(mockAddTodo).toHaveBeenCalled();    
        expect(mockAddTodo).toBeCalledTimes(1);
        expect(mockAddTodo).toBeCalledWith(mockTask);

        // after click
        expect(wrapper.find('.AddTodo-input').text()).toBe("");
        expect(wrapper.find('.AddTodo-input').prop("value")).toEqual("");
        expect(wrapper.find('.AddTodo-btn').prop('disabled')).toBeTruthy();     //again disabled after reset
    });
});
