import React from 'react';
import Proptypes from 'prop-types';

export const List = ({ listItems = [] }) => {
    return listItems.map((item, index) => {
        return <section key={index} className="article-list"><ul><li>{item}</li></ul></section>;
    })
};

List.propTypes = {
    listItems: Proptypes.array.isRequired
};