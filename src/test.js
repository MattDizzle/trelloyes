import {add} from './math';


describe('add', () => { // Test suite
    it('should add positive numbers', () => { // Test case
        const result = add(3, 5);
        expect(result).toEqual(8); // Assertion
    });

    it('should add negative numbers', () => { 
        const result = add(-3, -5);
        expect(result).toEqual(-8);
    });
});


//SMOKE TESTING

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<App />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
});


