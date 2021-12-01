import React from 'react';
import { render as renderRedux, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Nav } from 'react-bootstrap';
import ResultsFilter from './ResultsFilter';

const render = component => renderRedux(
    <Provider store={store}>
       {component}
    </Provider>
);

describe('ResultsFilter component', () => {
    let component;
    test('Renders ResultsFilter without crashing', () => {
        render(<ResultsFilter />);
    });
    test('Click on filter nav link', () => {
        const onClick = jest.fn();
        const { getByText }  = render(<Nav.Link onClick={onClick}>All</Nav.Link >);
        fireEvent.click(getByText(/all/i));
        expect(onClick).toHaveBeenCalled();
    });
});