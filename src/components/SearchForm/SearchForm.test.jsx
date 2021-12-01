import React from 'react';
import { render as renderRedux, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import SearchForm from './SearchForm';
import Button from '../Button';
import store from '../../store/store';
import { handleChange } from './SearchForm';

const render = component => renderRedux(
    <Provider store={store}>
       {component}
    </Provider>
);

describe('Search component', () => {
    let component;
    test('Renders SearchForm without crashing', () => {
        render(<SearchForm />);
    });
    test('Renders SearchForm with snapshot', () => {
        component = render(<SearchForm />);
        expect(component).toMatchSnapshot();
    });
    test('renders SearchForm with placeholder', () => {
        const { getByPlaceholderText } = render(<SearchForm placeholder={'What do you want to watch?'} />);
        const linkText = getByPlaceholderText(/what do you want to watch?/i);
        expect(linkText).toBeTruthy();
    });
    test('renders SearchForm without placeholder', () => {
        const { getByPlaceholderText } = render(<SearchForm />);
        const linkText = getByPlaceholderText(/what do you want to watch?/i);
        expect(linkText).toBeTruthy();
    });
    test('onChange input', () => {
        component = render(<SearchForm onChange={handleChange}/>);
        fireEvent.change(component.getByLabelText('input'), {target: {value: 'react'}});
        expect(component.getByLabelText('input').value).toBe('react');
    });
    test('onClick button', () => {
        const onClick = jest.fn();
        const { getByText } = render(<Button onClick={onClick}>Search</Button>);
        fireEvent.click(getByText(/search/i));
        expect(onClick).toHaveBeenCalled();
    });
});