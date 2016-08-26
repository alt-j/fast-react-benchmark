process.env.NODE_ENV = 'production';

var ITERATION_COUNT = 100;
var CHILDREN_COUNT = 100;

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var ReactServerRendering = require('react-server-rendering');

var dataSet = require('./generate-data')(CHILDREN_COUNT);

var getListView = require('./source/list');

var callback1 = function (listView, dataSet) {
    var element = React.createElement(listView, dataSet);
    ReactDOMServer.renderToString(element);
}.bind(this, getListView(React), dataSet);
console.log('Avarage time of React: ' + test(callback1) + 'ms')

var callback2 = function (listView, dataSet) {
    ReactServerRendering.createElement(listView, dataSet);
}.bind(this, getListView(ReactServerRendering), dataSet);
console.log('Avarage time of ReactServerRendering: ' + test(callback2) + 'ms')

function test(callback) {
    var sumTime = 0;

    for (var i = 0; i < ITERATION_COUNT; i++) {
        var start = process.hrtime();
        callback();
        sumTime += process.hrtime(start)[0] * 1000 + process.hrtime(start)[1] / 1000000;
    }

    return (sumTime / ITERATION_COUNT).toFixed(0);
}
