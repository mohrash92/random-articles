import React, { Component } from "react";
import { fetchFirstArticle } from '../data/articles';
import Article from './article/Article.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleLoaded: false,
            articleData: {}
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.articleData !== this.state.articleData) return true;
        return false;
    }

    renderArticles(fetchFirstArticle) {
        fetchFirstArticle ?
        fetchFirstArticle
            .then(data => {
                this.setState({
                    articleLoaded: true,
                    articleData: data,
                });
            })
            .catch(err => console.log("err", err)) : null /* eslint-disable-line no-console */
    }

    render() {
        const { articleLoaded, articleData } = this.state;
        if (!articleLoaded) {
            return (
                <section className="welcome-section">
                    <div>
                        <h1 id="welcome-text">Welcome to Random Article ranker</h1>
                    </div>
                    <div>
                        <button className="article-button" onClick={() => this.renderArticles(fetchFirstArticle())}>
                            Start Reading Articles
                        </button>
                    </div>
                </section>
            )
        } else {
            return (
                <Article renderArticles={this.renderArticles.bind(this)} articleData={articleData} />
            )
        }
    }
}

export default App;