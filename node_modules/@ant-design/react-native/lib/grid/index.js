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

var _index = require('../carousel/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../flex/index');

var _index4 = _interopRequireDefault(_index3);

var _style = require('../style');

var _index5 = require('./style/index');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Grid = function (_React$Component) {
    (0, _inherits3['default'])(Grid, _React$Component);

    function Grid() {
        (0, _classCallCheck3['default'])(this, Grid);
        return (0, _possibleConstructorReturn3['default'])(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Grid, [{
        key: 'getFlexItemStyle',
        value: function getFlexItemStyle(columnNum) {
            return {
                height: _reactNative.Dimensions.get('window').width / columnNum,
                borderRightWidth: this.props.hasLine ? _reactNative.StyleSheet.hairlineWidth : 0
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                hasLine = _props.hasLine,
                isCarousel = _props.isCarousel,
                _props$onPress = _props.onPress,
                _onPress = _props$onPress === undefined ? function () {} : _props$onPress,
                carouselProps = _props.carouselProps;

            var columnNum = this.props.columnNum;
            var customItemStyle = this.props.itemStyle;
            var carouselMaxRow = this.props.carouselMaxRow;
            var dataLength = data && data.length || 0;
            var rowCount = Math.ceil(dataLength / columnNum);
            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index6['default'] },
                function (styles) {
                    var renderItem = _this2.props.renderItem || function (dataItem, index) {
                        return _react2['default'].createElement(
                            _index4['default'],
                            { direction: 'column', justify: 'center', style: { flex: 1 }, onPress: function onPress() {
                                    return _onPress(dataItem, index);
                                } },
                            _react2['default'].isValidElement(dataItem.icon) ? dataItem.icon : _react2['default'].createElement(_reactNative.Image, { source: { uri: dataItem.icon }, style: styles.icon }),
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: styles.text },
                                dataItem.text
                            )
                        );
                    };
                    var flexItemStyle = _this2.getFlexItemStyle(columnNum);
                    var rowsArr = [];
                    for (var i = 0; i < rowCount; i++) {
                        var rowArr = [];

                        var _loop = function _loop(j) {
                            var dataIndex = i * columnNum + j;
                            if (dataIndex < dataLength) {
                                var el = data && data[dataIndex];
                                rowArr.push(_react2['default'].createElement(
                                    _index4['default'].Item,
                                    { key: j, style: [styles.grayBorderBox, flexItemStyle, {
                                            borderLeftWidth: hasLine && j === 0 ? _reactNative.StyleSheet.hairlineWidth : 0
                                        }, customItemStyle], onPress: function onPress() {
                                            return _onPress(el, dataIndex);
                                        } },
                                    renderItem(el, dataIndex)
                                ));
                            } else {
                                rowArr.push(_react2['default'].createElement(_index4['default'].Item, { key: j, style: [styles.grayBorderBox, flexItemStyle] }));
                            }
                        };

                        for (var j = 0; j < columnNum; j++) {
                            _loop(j);
                        }
                        var boxBorderStyle = {
                            borderTopWidth: hasLine && i === 0 ? _reactNative.StyleSheet.hairlineWidth : 0,
                            borderBottomWidth: hasLine ? _reactNative.StyleSheet.hairlineWidth : 0
                        };
                        rowsArr.push(_react2['default'].createElement(
                            _index4['default'],
                            { key: i, style: [styles.grayBorderBox, boxBorderStyle] },
                            rowArr
                        ));
                    }
                    var pageCount = Math.ceil(rowCount / carouselMaxRow);
                    var pagesArr = [];
                    if (isCarousel && pageCount > 1) {
                        for (var pageIndex = 0; pageIndex < pageCount; pageIndex++) {
                            var pageRows = [];
                            for (var ii = 0; ii < carouselMaxRow; ii++) {
                                var rowIndex = pageIndex * carouselMaxRow + ii;
                                if (rowIndex < rowCount) {
                                    pageRows.push(rowsArr[rowIndex]);
                                } else {
                                    var res = [];
                                    for (var jjj = 0; jjj < columnNum; jjj++) {
                                        res.push(_react2['default'].createElement(_index4['default'].Item, { key: jjj, style: [styles.grayBorderBox, flexItemStyle] }));
                                    }
                                    pageRows.push(_react2['default'].createElement(
                                        _index4['default'],
                                        { key: rowIndex, style: [styles.grayBorderBox, {
                                                borderBottomWidth: hasLine ? _reactNative.StyleSheet.hairlineWidth : 0
                                            }] },
                                        res
                                    ));
                                }
                            }
                            pagesArr.push(_react2['default'].createElement(
                                _reactNative.View,
                                { key: pageIndex, style: [styles.grayBorderBox, {
                                        borderTopWidth: hasLine && pageIndex !== 0 ? _reactNative.StyleSheet.hairlineWidth : 0
                                    }] },
                                pageRows
                            ));
                        }
                    }
                    return isCarousel && pageCount > 1 ? _react2['default'].createElement(
                        _index2['default'],
                        (0, _extends3['default'])({ infinite: false, dots: true }, carouselProps),
                        pagesArr
                    ) : _react2['default'].createElement(
                        _index4['default'],
                        { direction: 'column' },
                        rowsArr
                    );
                }
            );
        }
    }]);
    return Grid;
}(_react2['default'].Component);

exports['default'] = Grid;

Grid.defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    itemStyle: {},
    carouselProps: {}
};
module.exports = exports['default'];