var React = require('react');
var ReactDOMServer = require('react-dom/server');

var ReactRender = require('fast-react-render');
var ReactServer = require('fast-react-server');

module.exports = {
    'FastReactServer + FastReactRender': {
        engine: ReactServer,
        run: function (listView, dataSet) {
            var element = ReactServer.createElement(listView, dataSet);
            return ReactRender.elementToString(element);
        }
    },

    'React + ReactDOMServer': {
        engine: React,
        run: function (listView, dataSet) {
            var element = React.createElement(listView, dataSet);
            return ReactDOMServer.renderToString(element);
        }
    },

    'React + FastReactRender': {
        engine: React,
        run: function (listView, dataSet) {
            var element = React.createElement(listView, dataSet);
            return ReactRender.elementToString(element);
        }
    }
};
