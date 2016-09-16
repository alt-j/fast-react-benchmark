var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports = {
    'React + ReactDOMServer': {
        engine: React,
        run: function (listView, dataSet) {
            var element = React.createElement(listView, dataSet);
            return ReactDOMServer.renderToString(element);
        }
    }
};
