import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from '../../../../src/components/hello';

configure({adapter: new Adapter()});

describe('Hello', () =>{
    it('renders the text hello', () => {
        const helloWrapper = shallow(<Hello />);
        expect(helloWrapper.find('h1').text()).toBe("Hello");
    });
});