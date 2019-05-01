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
import { Image, Text, View } from 'react-native';
import { WithTheme } from '../style';
import CardStyles from './style';

var CardHeader = function (_React$Component) {
    _inherits(CardHeader, _React$Component);

    function CardHeader() {
        _classCallCheck(this, CardHeader);

        return _possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
    }

    _createClass(CardHeader, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                title = _a.title,
                thumb = _a.thumb,
                thumbStyle = _a.thumbStyle,
                extra = _a.extra,
                style = _a.style,
                styles = _a.styles,
                restProps = __rest(_a, ["title", "thumb", "thumbStyle", "extra", "style", "styles"]);
            return React.createElement(
                WithTheme,
                { styles: styles, themeStyles: CardStyles },
                function (s) {
                    var titleDom = title === undefined ? null : React.isValidElement(title) ? React.createElement(
                        View,
                        { style: s.headerContentWrap },
                        title
                    ) : React.createElement(
                        Text,
                        { style: s.headerContent },
                        title
                    );
                    var extraDom = extra === undefined ? null : React.isValidElement(extra) ? React.createElement(
                        View,
                        { style: s.headerExtraWrap },
                        extra
                    ) : React.createElement(
                        Text,
                        { style: [s.headerExtra] },
                        extra
                    );
                    return React.createElement(
                        View,
                        _extends({ style: [s.headerWrap, style] }, restProps),
                        React.createElement(
                            View,
                            { style: [s.headerTitle] },
                            typeof thumb === 'string' ? React.createElement(Image, { source: { uri: thumb }, style: [s.headerImage, thumbStyle] }) : thumb,
                            titleDom
                        ),
                        extra ? extraDom : null
                    );
                }
            );
        }
    }]);

    return CardHeader;
}(React.Component);

export default CardHeader;

CardHeader.defaultProps = {
    thumbStyle: {},
    style: {}
};