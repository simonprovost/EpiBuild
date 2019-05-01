import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Grid, Icon } from '../../';
import { ScrollView } from 'react-native';
import { outlineGlyphMap } from '@ant-design/icons-react-native/es/outline';

var IConDemo = function (_React$Component) {
    _inherits(IConDemo, _React$Component);

    function IConDemo() {
        _classCallCheck(this, IConDemo);

        return _possibleConstructorReturn(this, (IConDemo.__proto__ || Object.getPrototypeOf(IConDemo)).apply(this, arguments));
    }

    _createClass(IConDemo, [{
        key: 'render',
        value: function render() {
            var outlineData = Object.keys(outlineGlyphMap).map(function (item) {
                return {
                    icon: React.createElement(Icon, { name: item }),
                    text: item
                };
            });
            return React.createElement(
                ScrollView,
                null,
                React.createElement(Grid, { data: outlineData, columnNum: 3, hasLine: false })
            );
        }
    }]);

    return IConDemo;
}(React.Component);

export default IConDemo;

export var title = 'Icon';
export var description = 'Icon Example';