process.env.NODE_ENV = 'production';
var Benchmark = require('benchmark');
var cliff = require('cliff');

var childrenCount = process.env.CHILDREN_COUNT || 100;

var dataSet = require('./generate-data')(childrenCount);
var getListView = require('./source/list');
var tests = require('./tests');

var results = [];
var suite = new Benchmark.Suite('comparison', {
    onStart: function () {
        console.log('Starts\n');
    },

    onComplete: function () {
        console.log('Results for %d children', childrenCount);
        console.log(cliff.stringifyObjectRows(
            results,
            ['name', 'iterations', 'mean time', 'deviation', 'ops/sec'],
            ['yellow', 'green', 'green', 'purple', 'blue']
        ));
        results = [];
    }
});

Object.keys(tests).forEach(function (name) {
    var i = 0;
    suite.add(name, function () {
        tests[name].test.call(this, getListView(tests[name].from), dataSet);
    }, {
        initCount: 10,
        onCycle: function () {
            console.log('\033[1A' + new Array(i++).join('.'));
        },

        onComplete: function () {
            console.log('');
            onTestCompleted.call(this, name);
        }
    });
});

function onTestCompleted(name) {
    results.push({
        name: name,
        iterations: this.count,
        'mean time': (this.stats.mean * 1000).toFixed(3) + 'ms',
        deviation: '±' + (this.stats.deviation * 1000).toFixed(4) + 'ms',
        'ops/sec': (1 / this.stats.mean).toFixed(0)
    });
}

suite.run();
