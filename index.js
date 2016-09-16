var run = require('./run');
var tests = require('./tests');

var childrenCount = process.env.CHILDREN_COUNT || 100;

run(tests, childrenCount);
