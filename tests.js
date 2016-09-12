var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRender = require('fast-react-render');
var ReactServer = require('fast-react-server');

module.exports = {
    'FastReactServer + FastReactRender': {
        from: ReactServer,
        test: function (listView, dataSet) {
            var element = ReactServer.createElement(listView, dataSet);
            return ReactRender.elementToString(element);
        }
    },

    'React + FastReactRender': {
        from: React,
        test: function (listView, dataSet) {
            var element = React.createElement(listView, dataSet);
            return ReactRender.elementToString(element);
        }
    },

    'React + ReactDOMServer': {
        from: React,
        test: function (listView, dataSet) {
            var element = React.createElement(listView, dataSet);
            return ReactDOMServer.renderToString(element);
        }
    }
};
