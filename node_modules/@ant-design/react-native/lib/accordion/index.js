'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactNative = require('react-native');

var _Accordion = require('react-native-collapsible/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _style = require('../style');

var _index = require('./style/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var AccordionPanel = function (_React$Component) {
    (0, _inherits3['default'])(AccordionPanel, _React$Component);

    function AccordionPanel() {
        (0, _classCallCheck3['default'])(this, AccordionPanel);
        return (0, _possibleConstructorReturn3['default'])(this, (AccordionPanel.__proto__ || Object.getPrototypeOf(AccordionPanel)).apply(this, arguments));
    }

    (0, _createClass3['default'])(AccordionPanel, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return AccordionPanel;
}(_react2['default'].Component);

var Accordion = function (_React$Component2) {
    (0, _inherits3['default'])(Accordion, _React$Component2);

    function Accordion() {
        (0, _classCallCheck3['default'])(this, Accordion);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));

        _this2.renderHeader = function (styles) {
            return function (section, _, isActive) {
                return _react2['default'].createElement(
                    _reactNative.View,
                    { style: [styles.header, section.style] },
                    _react2['default'].isValidElement(section.title) ? section.title : _react2['default'].createElement(
                        _reactNative.View,
                        { style: styles.headerWrap },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: styles.headerText },
                            section.title
                        )
                    ),
                    _react2['default'].createElement(
                        _reactNative.View,
                        { style: styles.arrow },
                        _react2['default'].createElement(_icon2['default'], { name: isActive ? 'up' : 'down', style: styles.arrow })
                    )
                );
            };
        };
        _this2.renderContent = function (styles) {
            return function (section) {
                return _react2['default'].isValidElement(section.content) ? section.content : _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.content },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: styles.contentText },
                        section.content
                    )
                );
            };
        };
        return _this2;
    }

    (0, _createClass3['default'])(Accordion, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _a = this.props,
                children = _a.children,
                style = _a.style,
                _a$activeSections = _a.activeSections,
                activeSections = _a$activeSections === undefined ? [] : _a$activeSections,
                rest = __rest(_a, ["children", "style", "activeSections"]);
            var styles = this.props.styles;
            var headers = _react2['default'].Children.map(children, function (child) {
                return {
                    title: child.props.header,
                    content: child.props.children,
                    style: child.props.style || {}
                };
            });
            return _react2['default'].createElement(
                _style.WithTheme,
                { themeStyles: _index2['default'], styles: styles },
                function (s) {
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: [s.container, style] },
                        _react2['default'].createElement(_Accordion2['default'], (0, _extends3['default'])({ underlayColor: 'transparent', renderHeader: _this3.renderHeader(s), renderContent: _this3.renderContent(s), duration: 0, sections: headers, activeSections: activeSections }, rest))
                    );
                }
            );
        }
    }]);
    return Accordion;
}(_react2['default'].Component);

Accordion.Panel = AccordionPanel;
exports['default'] = Accordion;
module.exports = exports['default'];