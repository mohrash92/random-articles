import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Image } from '../../../../../src/components/article/Image.jsx';

configure({adapter: new Adapter()});

describe('Image', () => {
    const imageProps = {
      url: 'testurl.com',
      altText: 'some alt text'
    };

    it('renders the image with the correct url', () => {
        const imageWrapper = shallow(<Image {...imageProps} />);
        expect(imageWrapper.find('img').prop('src')).toBe("testurl.com");
    });

    it('renders the image with the correct alt text', () => {
        const imageWrapper = shallow(<Image {...imageProps} />);
        expect(imageWrapper.find('img').prop('alt')).toBe("some alt text");
    });

    it('does not render the image if there is no url', () => {
        const imageProps = {
            altText: 'some alt text'
        };
        const imageWrapper = shallow(<Image {...imageProps} />);
        expect(imageWrapper.find('img')).toHaveLength(0);
    });

    it('renders the image if there is a url but no alt text with the text "article image"', () => {
        const imageProps = {
            url: 'testurl.com'
        };
        const imageWrapper = shallow(<Image {...imageProps} />);
        expect(imageWrapper.find('img').prop('alt')).toBe("article image");
    });

});