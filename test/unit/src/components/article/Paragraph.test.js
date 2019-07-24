import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Paragraph } from '../../../../../src/components/article/Paragraph.jsx';

configure({adapter: new Adapter()});

describe('Paragraph', () => {

    it('renders a paragraph', () => {
        const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
        const imageWrapper = shallow(<Paragraph text={text} />);
        expect(imageWrapper.find('p').text()).toBe(text);
    });

    it('does not render a paragraph when no text is passed in ', () => {
        const imageWrapper = shallow(<Paragraph text={undefined} />);
        expect(imageWrapper.find('p')).toHaveLength(0);
    });

});