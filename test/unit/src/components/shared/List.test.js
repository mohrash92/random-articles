import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { List } from '../../../../../src/components/shared/List.jsx';

configure({adapter: new Adapter()});

describe('List', () => {
    const listProps = ['firstItem', 'secondItem'];

    it('renders 2 list items when they are passed in', () => {
        const imageWrapper = mount(<List listItems={listProps} />);
        expect(imageWrapper.find('ul').children().at(0).text()).toBe('firstItem');
        expect(imageWrapper.find('ul').children().at(1).text()).toBe('secondItem');
        expect(imageWrapper.find('ul')).toHaveLength(2);
    });

    it('does not render the list when listItems are not passed in', () => {
        const imageWrapper = mount(<List listItems={undefined} />);
        expect(imageWrapper.find('section')).toHaveLength(0);
    });

});