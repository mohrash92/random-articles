import React from 'react';
import Proptypes from 'prop-types';

export const Heading = ({ heading = ''}) => (
    heading && <h1 className="article-heading">{heading}</h1>
);

Heading.propTypes = {
    heading: Proptypes.string.isRequired
};