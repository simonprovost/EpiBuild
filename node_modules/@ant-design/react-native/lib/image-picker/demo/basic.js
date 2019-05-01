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

var _ = require('../../');

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

var ImagePickerExample = function (_React$Component) {
    (0, _inherits3['default'])(ImagePickerExample, _React$Component);

    function ImagePickerExample(props) {
        (0, _classCallCheck3['default'])(this, ImagePickerExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ImagePickerExample.__proto__ || Object.getPrototypeOf(ImagePickerExample)).call(this, props));

        _this.handleFileChange = function (files) {
            _this.setState({
                files: files
            });
        };
        _this.handleFile2Change = function (files2) {
            _this.setState({
                files2: files2
            });
        };
        _this.state = {
            files: [{
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2121'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2122'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2123'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2124'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2125'
            }, {
                url: 'https://zos.alipayobjects.com/rmsportal/WCxfiPKoDDHwLBM.png',
                id: '2126'
            }],
            files2: []
        };
        return _this;
    }

    (0, _createClass3['default'])(ImagePickerExample, [{
        key: 'requestCameraPermission',
        value: function requestCameraPermission() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator2['default'].mark(function _callee() {
                var granted;
                return _regenerator2['default'].wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _reactNative.PermissionsAndroid.request(_reactNative.PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                                    'title': '需要访问相册',
                                    'message': '需要访问相册'
                                });

                            case 3:
                                granted = _context.sent;

                                if (granted === _reactNative.PermissionsAndroid.RESULTS.GRANTED) {
                                    this.setState({
                                        granted: true
                                    });
                                } else {
                                    this.setState({
                                        granted: false
                                    });
                                }
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);

                                console.warn(_context.t0);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator2['default'].mark(function _callee2() {
                return _regenerator2['default'].wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!(_reactNative.Platform.OS === 'android')) {
                                    _context2.next = 3;
                                    break;
                                }

                                _context2.next = 3;
                                return this.requestCameraPermission();

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            if (_reactNative.Platform.OS === 'android' && !this.state.granted) {
                return _react2['default'].createElement(
                    _reactNative.Text,
                    null,
                    '\u9700\u8981\u8BBF\u95EE\u76F8\u518C\u7684\u6743\u9650'
                );
            }
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { marginTop: 20, marginLeft: 20 } },
                _react2['default'].createElement(_.ImagePicker, { onChange: this.handleFileChange, files: this.state.files }),
                _react2['default'].createElement(_.WhiteSpace, null),
                _react2['default'].createElement(_.ImagePicker, { onChange: this.handleFile2Change, files: this.state.files2 })
            );
        }
    }]);
    return ImagePickerExample;
}(_react2['default'].Component);

exports['default'] = ImagePickerExample;
module.exports = exports['default'];