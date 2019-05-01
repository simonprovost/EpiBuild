import _regeneratorRuntime from 'babel-runtime/regenerator';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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
import React from 'react';
import { PermissionsAndroid, Platform, Text, View } from 'react-native';
import { ImagePicker, WhiteSpace } from '../../';

var ImagePickerExample = function (_React$Component) {
    _inherits(ImagePickerExample, _React$Component);

    function ImagePickerExample(props) {
        _classCallCheck(this, ImagePickerExample);

        var _this = _possibleConstructorReturn(this, (ImagePickerExample.__proto__ || Object.getPrototypeOf(ImagePickerExample)).call(this, props));

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

    _createClass(ImagePickerExample, [{
        key: 'requestCameraPermission',
        value: function requestCameraPermission() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                var granted;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                                    'title': '需要访问相册',
                                    'message': '需要访问相册'
                                });

                            case 3:
                                granted = _context.sent;

                                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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
            return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
                return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!(Platform.OS === 'android')) {
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
            if (Platform.OS === 'android' && !this.state.granted) {
                return React.createElement(
                    Text,
                    null,
                    '\u9700\u8981\u8BBF\u95EE\u76F8\u518C\u7684\u6743\u9650'
                );
            }
            return React.createElement(
                View,
                { style: { marginTop: 20, marginLeft: 20 } },
                React.createElement(ImagePicker, { onChange: this.handleFileChange, files: this.state.files }),
                React.createElement(WhiteSpace, null),
                React.createElement(ImagePicker, { onChange: this.handleFile2Change, files: this.state.files2 })
            );
        }
    }]);

    return ImagePickerExample;
}(React.Component);

export default ImagePickerExample;