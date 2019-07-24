import React from 'react';
import Proptypes from 'prop-types';

export const Image = ({ url = '', altText ='article image'}) => (
    url && <img src={url} alt={altText} />
);

Image.propTypes = {
    url: Proptypes.string.isRequired,
    altText: Proptypes.string.isRequired
};
