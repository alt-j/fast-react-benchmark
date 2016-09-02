var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRender = require('fast-react-render');
var ReactServer = require('fast-react-server');

module.exports = {
    'React + ReactDOMServer': {
        from: React,
        fn: function (listView, dataSet) {
            var element = React.createElement(listView, dataSet);
            return ReactDOMServer.renderToString(element);
        }
    },

    'React + FastReactRender': {
        from: React,
        fn: function (listView, dataSet) {
            var element = React.createElement(listView, dataSet);
            return ReactRender.elementToString(element);
        }
    },

    'FastReactServer + FastReactRender': {
        from: ReactServer,
        fn: function (listView, dataSet) {
            var element = ReactServer.createElement(listView, dataSet);
            return ReactRender.elementToString(element);
        }
    }
};
