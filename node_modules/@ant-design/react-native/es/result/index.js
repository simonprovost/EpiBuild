import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../button/index';
import { WithTheme } from '../style';
import ResultStyles from './style/index';

var Result = function (_React$Component) {
    _inherits(Result, _React$Component);

    function Result() {
        _classCallCheck(this, Result);

        return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
    }

    _createClass(Result, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                img = _props.img,
                imgUrl = _props.imgUrl,
                title = _props.title,
                message = _props.message,
                buttonText = _props.buttonText,
                onButtonClick = _props.onButtonClick,
                buttonType = _props.buttonType;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: ResultStyles },
                function (styles) {
                    var imgContent = null;
                    if (img) {
                        imgContent = React.createElement(
                            View,
                            { style: styles.imgWrap },
                            img
                        );
                    } else if (imgUrl) {
                        imgContent = React.createElement(
                            View,
                            { style: styles.imgWrap },
                            React.createElement(Image, { source: imgUrl, style: styles.img })
                        );
                    }
                    return React.createElement(
                        View,
                        { style: [styles.result, style] },
                        imgContent,
                        title ? React.createElement(
                            View,
                            { style: styles.title },
                            typeof title === 'string' ? React.createElement(
                                Text,
                                { style: styles.titleText },
                                title
                            ) : title
                        ) : null,
                        message ? React.createElement(
                            View,
                            { style: styles.message },
                            typeof message === 'string' ? React.createElement(
                                Text,
                                { style: styles.messageText },
                                message
                            ) : message
                        ) : null,
                        buttonText ? React.createElement(
                            View,
                            { style: styles.buttonWrap },
                            React.createElement(
                                Button,
                                { style: styles.button, type: buttonType, onPress: onButtonClick },
                                buttonText
                            )
                        ) : null
                    );
                }
            );
        }
    }]);

    return Result;
}(React.Component);

export default Result;

Result.defaultProps = {
    buttonType: ''
};