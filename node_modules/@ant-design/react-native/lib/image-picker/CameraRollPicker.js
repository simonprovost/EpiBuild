'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _listView = require('../list-view');

var _listView2 = _interopRequireDefault(_listView);

var _ImageItem = require('./ImageItem');

var _ImageItem2 = _interopRequireDefault(_ImageItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var styles = _reactNative.StyleSheet.create({
    wrapper: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    marker: {
        position: 'absolute',
        top: 5,
        backgroundColor: 'transparent'
    },
    spinner: {}
});

var CameraRollPicker = function (_Component) {
    (0, _inherits3['default'])(CameraRollPicker, _Component);

    function CameraRollPicker(props) {
        (0, _classCallCheck3['default'])(this, CameraRollPicker);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (CameraRollPicker.__proto__ || Object.getPrototypeOf(CameraRollPicker)).call(this, props));

        _this.onFetch = function () {
            var _ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            var startFetch = arguments[1];
            var abortFetch = arguments[2];
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator2['default'].mark(function _callee() {
                var _props, assetType, groupTypes, first, groupName, mimeTypes, params, res, data;

                return _regenerator2['default'].wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _props = this.props, assetType = _props.assetType, groupTypes = _props.groupTypes, first = _props.first, groupName = _props.groupName, mimeTypes = _props.mimeTypes;
                                params = {
                                    first: first,
                                    after: this.after,
                                    assetType: assetType,
                                    groupName: groupName,
                                    mimeTypes: mimeTypes
                                };

                                if (_reactNative.Platform.OS !== 'android') {
                                    params.groupTypes = groupTypes;
                                }
                                _context.next = 6;
                                return _reactNative.CameraRoll.getPhotos(params);

                            case 6:
                                res = _context.sent;

                                if (res) {
                                    data = res.edges;

                                    if (res.page_info) {
                                        this.after = res.page_info.has_next_page ? res.page_info.end_cursor : '';
                                    }
                                    startFetch(data, first);
                                }
                                _context.next = 14;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](0);

                                if (__DEV__) {
                                    // tslint:disable-next-line:no-console
                                    console.error(_context.t0);
                                }
                                abortFetch(); // manually stop the refresh or pagination if it encounters network error

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 10]]);
            }));
        };
        _this._renderImage = function (item) {
            var selected = _this.state.selected;
            var _this$props = _this.props,
                imageMargin = _this$props.imageMargin,
                selectedMarker = _this$props.selectedMarker,
                imagesPerRow = _this$props.imagesPerRow,
                containerWidth = _this$props.containerWidth;

            var uri = item.node.image.uri;
            var isSelected = _this._arrayObjectIndexOf(selected, 'uri', uri) >= 0 ? true : false;
            return _react2['default'].createElement(_ImageItem2['default'], { key: uri, item: item, selected: isSelected, imageMargin: imageMargin, selectedMarker: selectedMarker, imagesPerRow: imagesPerRow, containerWidth: containerWidth
                // tslint:disable-next-line:jsx-no-bind
                , onPress: _this._selectImage.bind(_this) });
        };
        _this.state = {
            images: [],
            selected: _this.props.selected
        };
        return _this;
    }

    (0, _createClass3['default'])(CameraRollPicker, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                selected: nextProps.selected
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                imageMargin = _props2.imageMargin,
                backgroundColor = _props2.backgroundColor,
                imagesPerRow = _props2.imagesPerRow;

            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.wrapper, {
                        padding: imageMargin,
                        paddingRight: 0,
                        backgroundColor: backgroundColor
                    }] },
                _react2['default'].createElement(_listView2['default'], { onFetch: this.onFetch, refreshable: false, numColumns: imagesPerRow, renderItem: function renderItem(item) {
                        return _this2._renderImage(item);
                    } })
            );
        }
    }, {
        key: '_selectImage',
        value: function _selectImage(image) {
            var _props3 = this.props,
                maximum = _props3.maximum,
                callback = _props3.callback,
                selectSingleItem = _props3.selectSingleItem;

            var selected = this.state.selected;
            var index = this._arrayObjectIndexOf(selected, 'uri', image.uri);
            if (index >= 0) {
                selected.splice(index, 1);
            } else {
                if (selectSingleItem) {
                    selected.splice(0, selected.length);
                }
                if (selected.length < maximum) {
                    selected.push(image);
                }
            }
            this.setState({
                selected: selected
            });
            callback(selected, image);
        }
    }, {
        key: '_nEveryRow',
        value: function _nEveryRow(data, n) {
            var result = [];
            var temp = [];
            for (var i = 0; i < data.length; ++i) {
                if (i > 0 && i % n === 0) {
                    result.push(temp);
                    temp = [];
                }
                temp.push(data[i]);
            }
            if (temp.length > 0) {
                while (temp.length !== n) {
                    temp.push(null);
                }
                result.push(temp);
            }
            return result;
        }
    }, {
        key: '_arrayObjectIndexOf',
        value: function _arrayObjectIndexOf(array, property, value) {
            return array.map(function (o) {
                return o[property];
            }).indexOf(value);
        }
    }]);
    return CameraRollPicker;
}(_react.Component);

CameraRollPicker.defaultProps = {
    groupTypes: 'SavedPhotos',
    maximum: 15,
    imagesPerRow: 6,
    imageMargin: 4,
    first: 50,
    selectSingleItem: false,
    assetType: 'Photos',
    backgroundColor: 'white',
    selected: [],
    callback: function callback(selectedImages, currentImage) {
        // tslint:disable-next-line:no-console
        console.log(currentImage);
        // tslint:disable-next-line:no-console
        console.log(selectedImages);
    }
};
exports['default'] = CameraRollPicker;
module.exports = exports['default'];