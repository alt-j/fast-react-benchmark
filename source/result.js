var vidom = require('vidom');

module.exports = vidom.createComponent({
    _renderTitle: function (attrs) {
        var title = attrs.title;
        var url = attrs.url;

        if (url) {
            return vidom.node('a').children(title).attrs({href: url});
        }

        return vidom.node('div').children(title);
    },

    _renderCategories: function (categories) {
        if (!categories) {
            return null;
        }

        var content = categories.slice(0, 2).map(function (category) {
            return category.name;
        }).join(', ');

        return vidom.node('div').children(content);
    },

    onRender: function (attrs) {
        return vidom.node('div').children([
            this._renderTitle(attrs),
            this._renderCategories(attrs.categories),
            attrs.address ? vidom.node('div').children(attrs.address) : null
        ]);
    }
});
