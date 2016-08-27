process.env.NODE_ENV = 'production';

var ITERATION_COUNT = 100;
var CHILDREN_COUNT = 100;

var vidom = require('vidom');

var dataSet = require('./generate-data')(CHILDREN_COUNT);

var List = require('./source/list');

var callback = function () {
    var element = vidom.node(List).attrs(dataSet);
    return vidom.renderToString(element)
};
console.log('Avarage time of React: ' + test(callback) + 'ms')

function test(callback) {
    var sumTime = 0;

    for (var i = 0; i < ITERATION_COUNT; i++) {
        var start = process.hrtime();
        callback();
        sumTime += process.hrtime(start)[0] * 1000 + process.hrtime(start)[1] / 1000000;
    }

    return (sumTime / ITERATION_COUNT).toFixed(0);
}
