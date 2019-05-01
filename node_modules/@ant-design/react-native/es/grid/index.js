import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from '../carousel/index';
import Flex from '../flex/index';
import { WithTheme } from '../style';
import GridStyles from './style/index';

var Grid = function (_React$Component) {
    _inherits(Grid, _React$Component);

    function Grid() {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    _createClass(Grid, [{
        key: 'getFlexItemStyle',
        value: function getFlexItemStyle(columnNum) {
            return {
                height: Dimensions.get('window').width / columnNum,
                borderRightWidth: this.props.hasLine ? StyleSheet.hairlineWidth : 0
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
            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: GridStyles },
                function (styles) {
                    var renderItem = _this2.props.renderItem || function (dataItem, index) {
                        return React.createElement(
                            Flex,
                            { direction: 'column', justify: 'center', style: { flex: 1 }, onPress: function onPress() {
                                    return _onPress(dataItem, index);
                                } },
                            React.isValidElement(dataItem.icon) ? dataItem.icon : React.createElement(Image, { source: { uri: dataItem.icon }, style: styles.icon }),
                            React.createElement(
                                Text,
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
                                rowArr.push(React.createElement(
                                    Flex.Item,
                                    { key: j, style: [styles.grayBorderBox, flexItemStyle, {
                                            borderLeftWidth: hasLine && j === 0 ? StyleSheet.hairlineWidth : 0
                                        }, customItemStyle], onPress: function onPress() {
                                            return _onPress(el, dataIndex);
                                        } },
                                    renderItem(el, dataIndex)
                                ));
                            } else {
                                rowArr.push(React.createElement(Flex.Item, { key: j, style: [styles.grayBorderBox, flexItemStyle] }));
                            }
                        };

                        for (var j = 0; j < columnNum; j++) {
                            _loop(j);
                        }
                        var boxBorderStyle = {
                            borderTopWidth: hasLine && i === 0 ? StyleSheet.hairlineWidth : 0,
                            borderBottomWidth: hasLine ? StyleSheet.hairlineWidth : 0
                        };
                        rowsArr.push(React.createElement(
                            Flex,
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
                                        res.push(React.createElement(Flex.Item, { key: jjj, style: [styles.grayBorderBox, flexItemStyle] }));
                                    }
                                    pageRows.push(React.createElement(
                                        Flex,
                                        { key: rowIndex, style: [styles.grayBorderBox, {
                                                borderBottomWidth: hasLine ? StyleSheet.hairlineWidth : 0
                                            }] },
                                        res
                                    ));
                                }
                            }
                            pagesArr.push(React.createElement(
                                View,
                                { key: pageIndex, style: [styles.grayBorderBox, {
                                        borderTopWidth: hasLine && pageIndex !== 0 ? StyleSheet.hairlineWidth : 0
                                    }] },
                                pageRows
                            ));
                        }
                    }
                    return isCarousel && pageCount > 1 ? React.createElement(
                        Carousel,
                        _extends({ infinite: false, dots: true }, carouselProps),
                        pagesArr
                    ) : React.createElement(
                        Flex,
                        { direction: 'column' },
                        rowsArr
                    );
                }
            );
        }
    }]);

    return Grid;
}(React.Component);

export default Grid;

Grid.defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    itemStyle: {},
    carouselProps: {}
};