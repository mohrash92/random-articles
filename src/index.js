import React from "react";
import ReactDOM from "react-dom";
import Hello from './components/hello.jsx';

const wrapper = document.getElementById("random-articles");
wrapper ? ReactDOM.render(<Hello />, wrapper) : false;
