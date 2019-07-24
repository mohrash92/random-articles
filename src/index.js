import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';

const wrapper = document.getElementById("random-articles");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
