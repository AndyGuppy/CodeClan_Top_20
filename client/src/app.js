var React = require('react');
var ReactDOM = require('react-dom');

var MusicContainer = require('./containers/MusicContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <MusicContainer />,
    document.getElementById('app')
  );
};
