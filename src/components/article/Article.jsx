import React, { Component } from "react";
import Proptypes from 'prop-types';
import { Heading } from './Heading.jsx';
import { Image } from './Image.jsx';
import { Paragraph } from './Paragraph.jsx';
import { List } from '../shared/List.jsx';

import { fetchSecondArticle, fetchThirdArticle } from '../../data/articles';


class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            articleFunction: [fetchSecondArticle(), fetchThirdArticle()],
            renderRatings: false,
            isRead: false,
            totalReadArticles: []
        };
    }

    componentDidMount() {
        this.setReadState()
    }

    // only update the component when the article data is different
    shouldComponentUpdate(nextProps, nextState) {
        const { articleData } = this.props;
        const { renderRatings, isRead } = this.state;

        if(nextProps.articleData !== articleData ||
            nextState.renderRatings !== renderRatings ||
            nextState.isRead !== isRead
        ) {
            return true
        }
        return false;
    }

    addToReadItems() {
        const { isRead, totalReadArticles } = this.state;
        const { articleData: { title } } = this.props;
        if (isRead && !totalReadArticles.includes(title)) {
            totalReadArticles.push(title)
        }
    }

    setReadState() {
        this.setState({
            isRead: !this.state.isRead
        });
        this.addToReadItems();
    }

    getNextArticleFunction() {
        const { index, articleFunction } = this.state;

        this.setState({ index: (index + 1)});
        const articleRequestFunction = articleFunction[index];

        if (articleFunction.length === index) {
            this.setState({ renderRatings: true })
        } else {
            return articleRequestFunction;
        }
    }

    render() {
        const { articleData: { body: articles }, renderArticles } = this.props;
        const { renderRatings, totalReadArticles, isRead } = this.state;

        if(renderRatings) {
            return <List listItems={totalReadArticles} />
        } else {
            return (
                <section className="article-section">
                    {articles.map(({model: {text, url, altText, height, width, items}, type}, index) => {
                        if (type === "heading")
                            return <Heading key={index} heading={text} />;
                        if (type === "image")
                            return <Image key={index} url={url} alt={altText} height={height} width={width}/>;
                        if (type === "paragraph")
                            return <Paragraph key={index} text={text} />;
                        if (type === "list")
                            return <List key={index} listItems={items} />;
                        return null
                    })}
                    <div>
                        <label>
                            <input type="checkbox" checked={isRead} onChange={() => this.setReadState()} />
                            Read
                        </label>
                        <button className="next-button"  onClick={() => renderArticles(this.getNextArticleFunction())}>
                            Next Article
                        </button>
                    </div>
                </section>
            )
        }
    }
}

export default Article;

Article.propTypes = {
    articleData: Proptypes.shape({
        title: Proptypes.string.isRequired,
        body: Proptypes.shape({
            type: Proptypes.string.isRequired,
            model: Proptypes.shape({
                text: Proptypes.string.isRequired,
                url: Proptypes.string.isRequired,
                height: Proptypes.string.isRequired,
                width: Proptypes.string.isRequired,
                items: Proptypes.array.isRequired
            })
        })
    }),
    renderArticles: Proptypes.func.isRequired
};