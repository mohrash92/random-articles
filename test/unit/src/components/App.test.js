import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../../src/components/App';

configure({adapter: new Adapter()});

describe('App', () =>{
    it('renders a heading with the text "Welcome to Random Article ranker"', () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.find('h1').text()).toBe("Welcome to Random Article ranker");
    });

    it('renders a start reading articles button with the text "Start Reading Articles"', () => {
        const appWrapper = shallow(<App />);
        expect(appWrapper.find('.article-button').length).toBe(1);
        expect(appWrapper.find('.article-button').text()).toEqual("Start Reading Articles");
    });
});