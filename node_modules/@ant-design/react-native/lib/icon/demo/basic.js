'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.description = exports.title = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

var _reactNative = require('react-native');

var _outline = require('@ant-design/icons-react-native/lib/outline');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var IConDemo = function (_React$Component) {
    (0, _inherits3['default'])(IConDemo, _React$Component);

    function IConDemo() {
        (0, _classCallCheck3['default'])(this, IConDemo);
        return (0, _possibleConstructorReturn3['default'])(this, (IConDemo.__proto__ || Object.getPrototypeOf(IConDemo)).apply(this, arguments));
    }

    (0, _createClass3['default'])(IConDemo, [{
        key: 'render',
        value: function render() {
            var outlineData = Object.keys(_outline.outlineGlyphMap).map(function (item) {
                return {
                    icon: _react2['default'].createElement(_.Icon, { name: item }),
                    text: item
                };
            });
            return _react2['default'].createElement(
                _reactNative.ScrollView,
                null,
                _react2['default'].createElement(_.Grid, { data: outlineData, columnNum: 3, hasLine: false })
            );
        }
    }]);
    return IConDemo;
}(_react2['default'].Component);

exports['default'] = IConDemo;
var title = exports.title = 'Icon';
var description = exports.description = 'Icon Example';