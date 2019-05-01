import _typeof from 'babel-runtime/helpers/typeof';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable: jsx-no-multiline-js */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from '../icon';
import { WithTheme } from '../style';

var StepsItem = function (_React$Component) {
    _inherits(StepsItem, _React$Component);

    function StepsItem() {
        _classCallCheck(this, StepsItem);

        return _possibleConstructorReturn(this, (StepsItem.__proto__ || Object.getPrototypeOf(StepsItem)).apply(this, arguments));
    }

    _createClass(StepsItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                size = _props.size,
                last = _props.last,
                title = _props.title,
                description = _props.description,
                direction = _props.direction,
                status = _props.status,
                icon = _props.icon,
                styles = _props.styles,
                renderIcon = _props.renderIcon;

            var index = this.props.index;
            var current = this.props.current;
            var errorTail = this.props.errorTail;
            var starting = index < current || status === 'finish' || index === current || status === 'process';
            var waiting = index > current || status === 'wait';
            var error = status === 'error';
            return React.createElement(
                WithTheme,
                null,
                function (_, theme) {
                    var headCls = '';
                    var tailTopCls = '';
                    var tailBottomCls = '';
                    var sizeCls = size === 'small' ? '_s' : '_l';
                    if (index < current || status === 'finish') {
                        headCls = 'head_blue' + sizeCls;
                        tailTopCls = 'tail_blue';
                        tailBottomCls = 'tail_blue';
                    } else if (index === current || status === 'process') {
                        headCls = 'head_blue' + sizeCls;
                        tailTopCls = 'tail_blue';
                        tailBottomCls = 'tail_gray';
                    } else if (index > current || status === 'wait') {
                        headCls = 'head_gray' + sizeCls;
                        tailTopCls = 'tail_gray';
                        tailBottomCls = 'tail_gray';
                    } else if (status === 'error') {
                        headCls = 'head_red' + sizeCls;
                        tailTopCls = 'tail_gray';
                        tailBottomCls = 'tail_gray';
                    }
                    if (last) {
                        tailTopCls = 'tail_last';
                        tailBottomCls = 'tail_last';
                    }
                    if (errorTail > -1) {
                        tailBottomCls = 'tail_error';
                    }
                    var iconSource = void 0;
                    if (renderIcon) {
                        iconSource = renderIcon({ starting: starting, waiting: waiting, error: error });
                    } else {
                        if (starting) {
                            iconSource = React.createElement(Icon, { name: 'check', color: theme.color_icon_base, style: styles['icon' + sizeCls] });
                        } else if (waiting) {
                            iconSource = React.createElement(Icon, { name: 'ellipsis', color: theme.color_icon_base, style: styles['icon' + sizeCls] });
                            if (!!icon) {
                                iconSource = icon;
                            }
                        } else if (error) {
                            iconSource = React.createElement(Icon, { name: 'close', color: theme.color_icon_base, style: styles['icon' + sizeCls] });
                        }
                    }
                    var isHorizontal = direction === 'horizontal';
                    var parentStyle = isHorizontal ? { flexDirection: 'column' } : { flexDirection: 'row' };
                    var childStyle = isHorizontal ? { flexDirection: 'row', flex: 1 } : { flexDirection: 'column' };
                    var styleSuffix = '';
                    if (isHorizontal) {
                        styleSuffix = '_h';
                    }
                    return React.createElement(
                        View,
                        { style: parentStyle },
                        React.createElement(
                            View,
                            { style: childStyle },
                            React.createElement(
                                View,
                                { style: [styles['head_default' + sizeCls], styles[headCls]] },
                                React.isValidElement(iconSource) ? iconSource : null
                            ),
                            React.createElement(View, { style: [styles['tail_default' + sizeCls + styleSuffix], styles[tailTopCls]] }),
                            React.createElement(View, { style: [styles['tail_default' + sizeCls + styleSuffix], styles[tailBottomCls]] })
                        ),
                        React.createElement(
                            View,
                            { style: styles['content' + sizeCls + styleSuffix] },
                            (typeof title === 'undefined' ? 'undefined' : _typeof(title)) !== 'object' ? React.createElement(
                                Text,
                                { style: [styles['title' + sizeCls]] },
                                title
                            ) : React.createElement(
                                View,
                                null,
                                title
                            ),
                            (typeof description === 'undefined' ? 'undefined' : _typeof(description)) !== 'object' ? React.createElement(
                                Text,
                                { style: [styles['description' + sizeCls]] },
                                description
                            ) : React.createElement(
                                View,
                                null,
                                description
                            )
                        )
                    );
                }
            );
        }
    }]);

    return StepsItem;
}(React.Component);

export default StepsItem;