// imports
import $ from 'jquery';
import "./styles/index.scss";

// globals
window.$ = window.jQuery = $;

// components
import questions from "./questions";

$(function() {
    questions()
})
