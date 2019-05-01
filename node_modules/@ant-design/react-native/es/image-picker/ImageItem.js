import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../icon';

var ImageItem = function (_Component) {
    _inherits(ImageItem, _Component);

    function ImageItem(props) {
        _classCallCheck(this, ImageItem);

        return _possibleConstructorReturn(this, (ImageItem.__proto__ || Object.getPrototypeOf(ImageItem)).call(this, props));
    }

    _createClass(ImageItem, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _Dimensions$get = Dimensions.get('window'),
                width = _Dimensions$get.width;

            var _props = this.props,
                imageMargin = _props.imageMargin,
                imagesPerRow = _props.imagesPerRow,
                containerWidth = _props.containerWidth;

            if (typeof containerWidth !== 'undefined') {
                width = containerWidth;
            }
            this._imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                item = _props2.item,
                selected = _props2.selected,
                selectedMarker = _props2.selectedMarker,
                imageMargin = _props2.imageMargin;

            if (!item) {
                return null;
            }
            var marker = selectedMarker ? selectedMarker : React.createElement(Icon, { name: 'check-circle', style: [styles.marker] });
            var image = item.node.image;
            return React.createElement(
                TouchableOpacity,
                { style: { marginBottom: imageMargin, marginRight: imageMargin }, onPress: function onPress() {
                        return _this2._handleClick(image);
                    } },
                React.createElement(Image, { source: { uri: image.uri }, style: { height: this._imageSize, width: this._imageSize } }),
                selected ? marker : null
            );
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(item) {
            if (this.props.onPress) {
                this.props.onPress(item);
            }
        }
    }]);

    return ImageItem;
}(Component);

ImageItem.defaultProps = {
    item: {},
    selected: false
};
var styles = StyleSheet.create({
    marker: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'transparent'
    }
});
export default ImageItem;