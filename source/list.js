var getResult = require('./result');

module.exports = function (React) {
    var Result = getResult(React);

    return React.createClass({
        displayName: this.name,

        _renderList: function () {
            var list = this.props.list;
            if (!list) {
                return null;
            }

            return React.createElement(
                'div',
                null,
                list.map(function (feature, index) {
                    return React.createElement(Result, {
                        title: feature.title,
                        categories: feature.categories,
                        address: feature.address,
                        url: feature.url,

                        key: index
                    });
                })
            );
        },

        render: function () {
            return React.createElement(
                'div',
                {style: {display: 'none'}},
                React.createElement('h1', null, this.props.title),
                this._renderList()
            );
        }
    });
};
