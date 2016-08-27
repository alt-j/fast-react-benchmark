var vidom = require('vidom');

var Result = require('./result');

module.exports = vidom.createComponent({
    _renderList: function (list) {
        if (!list) {
            return null;
        }

        return vidom.node('div').children(
            list.map(function (feature, index) {
                return vidom.node(Result).attrs({
                    title: feature.title,
                    categories: feature.categories,
                    address: feature.address,
                    url: feature.url,

                    key: index
                });
            })
        );
    },

    onRender: function (attrs) {
        return vidom.node('div').attrs({
            style: {display: 'none'}
        }).children([
            vidom.node('h1').children(attrs.title),
            this._renderList(attrs.list)
        ]);
    }
});
