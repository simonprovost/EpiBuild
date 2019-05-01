import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import { Text, View } from 'react-native';
import RNAccordion from 'react-native-collapsible/Accordion';
import Icon from '../icon';
import { WithTheme } from '../style';
import AccordionStyles from './style/index';

var AccordionPanel = function (_React$Component) {
    _inherits(AccordionPanel, _React$Component);

    function AccordionPanel() {
        _classCallCheck(this, AccordionPanel);

        return _possibleConstructorReturn(this, (AccordionPanel.__proto__ || Object.getPrototypeOf(AccordionPanel)).apply(this, arguments));
    }

    _createClass(AccordionPanel, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return AccordionPanel;
}(React.Component);

var Accordion = function (_React$Component2) {
    _inherits(Accordion, _React$Component2);

    function Accordion() {
        _classCallCheck(this, Accordion);

        var _this2 = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));

        _this2.renderHeader = function (styles) {
            return function (section, _, isActive) {
                return React.createElement(
                    View,
                    { style: [styles.header, section.style] },
                    React.isValidElement(section.title) ? section.title : React.createElement(
                        View,
                        { style: styles.headerWrap },
                        React.createElement(
                            Text,
                            { style: styles.headerText },
                            section.title
                        )
                    ),
                    React.createElement(
                        View,
                        { style: styles.arrow },
                        React.createElement(Icon, { name: isActive ? 'up' : 'down', style: styles.arrow })
                    )
                );
            };
        };
        _this2.renderContent = function (styles) {
            return function (section) {
                return React.isValidElement(section.content) ? section.content : React.createElement(
                    View,
                    { style: styles.content },
                    React.createElement(
                        Text,
                        { style: styles.contentText },
                        section.content
                    )
                );
            };
        };
        return _this2;
    }

    _createClass(Accordion, [{
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
            var headers = React.Children.map(children, function (child) {
                return {
                    title: child.props.header,
                    content: child.props.children,
                    style: child.props.style || {}
                };
            });
            return React.createElement(
                WithTheme,
                { themeStyles: AccordionStyles, styles: styles },
                function (s) {
                    return React.createElement(
                        View,
                        { style: [s.container, style] },
                        React.createElement(RNAccordion, _extends({ underlayColor: 'transparent', renderHeader: _this3.renderHeader(s), renderContent: _this3.renderContent(s), duration: 0, sections: headers, activeSections: activeSections }, rest))
                    );
                }
            );
        }
    }]);

    return Accordion;
}(React.Component);

Accordion.Panel = AccordionPanel;
export default Accordion;