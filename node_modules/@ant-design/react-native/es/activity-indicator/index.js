import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { WithTheme } from '../style';
import ActivityIndicatorStyles from './style/index';

var RNActivityIndicator = function (_React$Component) {
    _inherits(RNActivityIndicator, _React$Component);

    function RNActivityIndicator() {
        _classCallCheck(this, RNActivityIndicator);

        return _possibleConstructorReturn(this, (RNActivityIndicator.__proto__ || Object.getPrototypeOf(RNActivityIndicator)).apply(this, arguments));
    }

    _createClass(RNActivityIndicator, [{
        key: '_renderToast',
        value: function _renderToast() {
            var _this2 = this;

            var _props = this.props,
                _props$color = _props.color,
                color = _props$color === undefined ? 'white' : _props$color,
                _props$size = _props.size,
                size = _props$size === undefined ? 'large' : _props$size;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: ActivityIndicatorStyles },
                function (styles) {
                    return React.createElement(
                        View,
                        { style: [styles.container] },
                        React.createElement(
                            View,
                            { style: [styles.innerContainer, { height: 89 }] },
                            React.createElement(
                                View,
                                { style: [styles.wrapper] },
                                React.createElement(ActivityIndicator, { color: color, size: size }),
                                _this2.props.text && React.createElement(
                                    Text,
                                    { style: [styles.toast] },
                                    _this2.props.text
                                )
                            )
                        )
                    );
                }
            );
        }
    }, {
        key: '_renderSpinner',
        value: function _renderSpinner() {
            var _props2 = this.props,
                color = _props2.color,
                size = _props2.size,
                text = _props2.text;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: ActivityIndicatorStyles },
                function (styles) {
                    return React.createElement(
                        View,
                        { style: styles.spinner },
                        React.createElement(ActivityIndicator, { color: color, size: size }),
                        text && React.createElement(
                            Text,
                            { style: [styles.tip] },
                            text
                        )
                    );
                }
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.animating) {
                return this.props.toast ? this._renderToast() : this._renderSpinner();
            }
            return null;
        }
    }]);

    return RNActivityIndicator;
}(React.Component);

export default RNActivityIndicator;

RNActivityIndicator.defaultProps = {
    animating: true,
    color: 'gray',
    size: 'small',
    toast: false
};