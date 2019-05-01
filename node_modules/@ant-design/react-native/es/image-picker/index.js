import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { WithTheme } from '../style';
import ImageRoll from './ImageRoll';
import ImagePickerStyles from './style/index';

var ImagePicker = function (_React$Component) {
    _inherits(ImagePicker, _React$Component);

    function ImagePicker(props) {
        _classCallCheck(this, ImagePicker);

        var _this = _possibleConstructorReturn(this, (ImagePicker.__proto__ || Object.getPrototypeOf(ImagePicker)).call(this, props));

        _this.onPressIn = function (styles) {
            return function () {
                _this.plusWrap.setNativeProps({
                    style: [styles.item, styles.size, styles.plusWrapHighlight]
                });
            };
        };
        _this.onPressOut = function (styles) {
            return function () {
                _this.plusWrap.setNativeProps({
                    style: [styles.item, styles.size, styles.plusWrapNormal]
                });
            };
        };
        _this.showPicker = function () {
            if (_this.props.onAddImageClick) {
                _this.props.onAddImageClick();
                return;
            }
            _this.setState({
                visible: true
            });
        };
        _this.hideImageRoll = function () {
            _this.setState({
                visible: false
            });
            if (_this.props.onFail) {
                _this.props.onFail('cancel image selection');
            }
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(ImagePicker, [{
        key: 'addImage',
        value: function addImage(imageObj) {
            if (!imageObj.url) {
                imageObj.url = imageObj.uri;
                delete imageObj.uri;
            }
            var _props$files = this.props.files,
                files = _props$files === undefined ? [] : _props$files;

            var newImages = files.concat(imageObj);
            if (this.props.onChange) {
                this.props.onChange(newImages, 'add');
            }
        }
    }, {
        key: 'removeImage',
        value: function removeImage(idx) {
            var newImages = [];
            var _props$files2 = this.props.files,
                files = _props$files2 === undefined ? [] : _props$files2;

            files.forEach(function (image, index) {
                if (index !== idx) {
                    newImages.push(image);
                }
            });
            if (this.props.onChange) {
                this.props.onChange(newImages, 'remove', idx);
            }
        }
    }, {
        key: 'onImageClick',
        value: function onImageClick(index) {
            if (this.props.onImageClick) {
                this.props.onImageClick(index, this.props.files);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                _props$files3 = _props.files,
                files = _props$files3 === undefined ? [] : _props$files3,
                selectable = _props.selectable,
                cameraPickerProps = _props.cameraPickerProps;

            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: ImagePickerStyles },
                function (styles) {
                    var filesView = files.map(function (item, index) {
                        return React.createElement(
                            View,
                            { key: index, style: [styles.item, styles.size] },
                            React.createElement(
                                TouchableOpacity,
                                { onPress: function onPress() {
                                        return _this2.onImageClick(index);
                                    }, activeOpacity: 0.6 },
                                React.createElement(Image, { source: { uri: item.url }, style: [styles.size, styles.image] })
                            ),
                            React.createElement(
                                TouchableOpacity,
                                { onPress: function onPress() {
                                        return _this2.removeImage(index);
                                    }, style: styles.closeWrap, activeOpacity: 0.6 },
                                React.createElement(
                                    Text,
                                    { style: styles.closeText },
                                    '\xD7'
                                )
                            )
                        );
                    });
                    var imageRollEl = React.createElement(ImageRoll, { onCancel: _this2.hideImageRoll, onSelected: function onSelected(imgObj) {
                            return _this2.addImage(imgObj);
                        }, title: _this2.props.title, cancelText: _this2.props.cancelText, cameraPickerProps: cameraPickerProps });
                    return React.createElement(
                        View,
                        { style: styles.container },
                        filesView,
                        selectable && React.createElement(
                            TouchableWithoutFeedback,
                            { onPress: _this2.showPicker, onPressIn: _this2.onPressIn(styles), onPressOut: _this2.onPressOut(styles) },
                            React.createElement(
                                View,
                                { ref: function ref(conponent) {
                                        return _this2.plusWrap = conponent;
                                    }, style: [styles.item, styles.size, styles.plusWrap, styles.plusWrapNormal] },
                                React.createElement(
                                    Text,
                                    { style: [styles.plusText] },
                                    '+'
                                )
                            )
                        ),
                        _this2.state.visible ? imageRollEl : null
                    );
                }
            );
        }
    }]);

    return ImagePicker;
}(React.Component);

export default ImagePicker;

ImagePicker.defaultProps = {
    onChange: function onChange() {},
    onFail: function onFail() {},

    files: [],
    selectable: true
};