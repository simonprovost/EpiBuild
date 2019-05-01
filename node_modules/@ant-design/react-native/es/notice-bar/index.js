import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';
import Marquee from './Marquee';
import NoticeStyles from './style/index';

var NoticeBar = function (_React$Component) {
    _inherits(NoticeBar, _React$Component);

    function NoticeBar(props) {
        _classCallCheck(this, NoticeBar);

        var _this = _possibleConstructorReturn(this, (NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call(this, props));

        _this.onPress = function () {
            var _this$props = _this.props,
                mode = _this$props.mode,
                onPress = _this$props.onPress;

            if (onPress) {
                onPress();
            }
            if (mode === 'closable') {
                _this.setState({
                    show: false
                });
            }
        };
        _this.state = {
            show: true
        };
        return _this;
    }

    _createClass(NoticeBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                mode = _props.mode,
                icon = _props.icon,
                style = _props.style,
                action = _props.action,
                marqueeProps = _props.marqueeProps;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: NoticeStyles },
                function (styles, theme) {
                    var operationDom = null;
                    icon = typeof icon === 'undefined' ? React.createElement(Icon, { name: 'sound', color: theme.brand_warning }) : icon;
                    if (mode === 'closable') {
                        operationDom = React.createElement(
                            TouchableWithoutFeedback,
                            { onPress: _this2.onPress },
                            React.createElement(
                                View,
                                { style: styles.actionWrap },
                                action ? action : React.createElement(
                                    Text,
                                    { style: [styles.close] },
                                    '\xD7'
                                )
                            )
                        );
                    } else if (mode === 'link') {
                        operationDom = React.createElement(
                            View,
                            { style: styles.actionWrap },
                            action ? action : React.createElement(
                                Text,
                                { style: [styles.link] },
                                '\u221F'
                            )
                        );
                    }
                    var main = React.createElement(
                        View,
                        { style: [styles.notice, style] },
                        icon && React.createElement(
                            View,
                            { style: styles.left15 },
                            icon
                        ),
                        React.createElement(
                            View,
                            { style: [styles.container, icon ? styles.left6 : styles.left15] },
                            React.createElement(Marquee, _extends({ style: styles.content, text: children }, marqueeProps))
                        ),
                        operationDom
                    );
                    return _this2.state.show ? mode === 'closable' ? main : React.createElement(
                        TouchableWithoutFeedback,
                        { onPress: _this2.onPress },
                        main
                    ) : null;
                }
            );
        }
    }]);

    return NoticeBar;
}(React.Component);

export default NoticeBar;

NoticeBar.defaultProps = {
    mode: '',
    onPress: function onPress() {}
};