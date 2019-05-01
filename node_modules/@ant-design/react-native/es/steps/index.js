import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { View } from 'react-native';
import { WithTheme } from '../style';
import StepsItem from './StepsItem';
import StepsStyles from './style/index';

var Steps = function (_React$Component) {
    _inherits(Steps, _React$Component);

    function Steps(props) {
        _classCallCheck(this, Steps);

        var _this = _possibleConstructorReturn(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

        _this.onLayout = function (e) {
            _this.setState({
                wrapWidth: e.nativeEvent.layout.width
            });
        };
        _this.state = {
            wrapWidth: 0
        };
        return _this;
    }

    _createClass(Steps, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var children = this.props.children;
            var direction = this.props.direction === 'horizontal' ? 'row' : 'column';
            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: StepsStyles },
                function (styles) {
                    return React.createElement(
                        View,
                        { style: { flexDirection: direction }, onLayout: function onLayout(e) {
                                _this2.onLayout(e);
                            } },
                        React.Children.map(children, function (ele, idx) {
                            var errorTail = -1;
                            if (idx < children.length - 1) {
                                var status = children[idx + 1].props.status;
                                if (status === 'error') {
                                    errorTail = idx;
                                }
                            }
                            return React.cloneElement(ele, {
                                index: idx,
                                last: idx === children.length - 1,
                                direction: _this2.props.direction,
                                current: _this2.props.current,
                                width: 1 / (children.length - 1) * _this2.state.wrapWidth,
                                size: _this2.props.size,
                                finishIcon: _this2.props.finishIcon,
                                errorTail: errorTail,
                                styles: styles
                            });
                        })
                    );
                }
            );
        }
    }]);

    return Steps;
}(React.Component);

export default Steps;

Steps.defaultProps = {
    direction: ''
};
Steps.Step = StepsItem;