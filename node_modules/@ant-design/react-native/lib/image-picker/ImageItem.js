'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ImageItem = function (_Component) {
    (0, _inherits3['default'])(ImageItem, _Component);

    function ImageItem(props) {
        (0, _classCallCheck3['default'])(this, ImageItem);
        return (0, _possibleConstructorReturn3['default'])(this, (ImageItem.__proto__ || Object.getPrototypeOf(ImageItem)).call(this, props));
    }

    (0, _createClass3['default'])(ImageItem, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _Dimensions$get = _reactNative.Dimensions.get('window'),
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
            var marker = selectedMarker ? selectedMarker : _react2['default'].createElement(_icon2['default'], { name: 'check-circle', style: [styles.marker] });
            var image = item.node.image;
            return _react2['default'].createElement(
                _reactNative.TouchableOpacity,
                { style: { marginBottom: imageMargin, marginRight: imageMargin }, onPress: function onPress() {
                        return _this2._handleClick(image);
                    } },
                _react2['default'].createElement(_reactNative.Image, { source: { uri: image.uri }, style: { height: this._imageSize, width: this._imageSize } }),
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
}(_react.Component);

ImageItem.defaultProps = {
    item: {},
    selected: false
};
var styles = _reactNative.StyleSheet.create({
    marker: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'transparent'
    }
});
exports['default'] = ImageItem;
module.exports = exports['default'];