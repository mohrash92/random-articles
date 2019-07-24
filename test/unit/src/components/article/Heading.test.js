import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Heading } from '../../../../../src/components/article/Heading.jsx';

configure({adapter: new Adapter()});

describe('Heading', () =>{
    it('renders the heading when it is passed in', () => {
        const headingWrapper = shallow(<Heading heading={'a heading'}/>);
        expect(headingWrapper.find('h1').text()).toBe("a heading");
    });

    it('does not render the heading when it is ot passed in', () => {
        const headingWrapper = shallow(<Heading heading={undefined}/>);
        expect(headingWrapper.find('h1')).toHaveLength(0);
    });

});