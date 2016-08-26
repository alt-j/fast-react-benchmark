module.exports = function (resultCount) {
    var list = [];
    for (var i = 0; i < resultCount; i++) {
        list.push({
            title: 'Result ' + i,
            url: '//example.com/',
            categories: [{name: 'some ' + i}, {name: 'some'}, {name: 'some'}],
            address: '<b>Some address'
        });
    }

    return {
        title: 'Some title',
        list: list
    }
};
