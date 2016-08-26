module.exports = function (React) {
    return React.createClass({
        displayName: this.name,

        _renderTitle: function () {
            var title = this.props.title;
            var url = this.props.url;

            if (url) {
                return React.createElement('a', {href: url}, title);
            }

            return React.createElement('div', null, title);
        },

        _renderCategories: function () {
            var categories = this.props.categories;
            if (!categories) {
                return null;
            }

            var content = categories.slice(0, 2).map(function (category) {
                return category.name;
            }).join(', ');

            return React.createElement('div', null, content);
        },

        render: function () {
            return React.createElement(
                'div',
                null,
                this._renderTitle(),
                this._renderCategories(),
                this.props.address ? React.createElement('div', null, this.props.address) : null
            );
        }
    });
};
