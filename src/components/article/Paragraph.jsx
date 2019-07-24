import React from 'react';
import Proptypes from 'prop-types';

export const Paragraph = ({ text = ''}) => (
    text && <p className="article-paragraph">{text}</p>
);

Paragraph.propTypes = {
    text: Proptypes.string.isRequired
};