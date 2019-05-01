'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.description = exports.title = undefined;

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

var _2 = require('../../');

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

var BasicListExample = function (_React$Component) {
    (0, _inherits3['default'])(BasicListExample, _React$Component);

    function BasicListExample() {
        (0, _classCallCheck3['default'])(this, BasicListExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicListExample.__proto__ || Object.getPrototypeOf(BasicListExample)).apply(this, arguments));

        _this.state = {
            layout: 'list'
        };
        _this.sleep = function (time) {
            return new Promise(function (resolve) {
                return setTimeout(function () {
                    return resolve();
                }, time);
            });
        };
        _this.onFetch = function () {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var startFetch = arguments[1];
            var abortFetch = arguments[2];
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regenerator2['default'].mark(function _callee() {
                var pageLimit, skip, rowData;
                return _regenerator2['default'].wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                //This is required to determinate whether the first loading list is all loaded.
                                pageLimit = 30;

                                if (this.state.layout === 'grid') pageLimit = 60;
                                skip = (page - 1) * pageLimit;
                                //Generate dummy data

                                rowData = Array.from({ length: pageLimit }, function (_, index) {
                                    return 'item -> ' + (index + skip);
                                });
                                //Simulate the end of the list if there is no more data returned from the server

                                if (page === 3) {
                                    rowData = [];
                                }
                                //Simulate the network loading in ES7 syntax (async/await)
                                _context.next = 8;
                                return this.sleep(2000);

                            case 8:
                                startFetch(rowData, pageLimit);
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](0);

                                abortFetch(); //manually stop the refresh or pagination if it encounters network error

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 11]]);
            }));
        };
        _this.renderItem = function (item) {
            return _react2['default'].createElement(
                _reactNative.View,
                { style: { padding: 10 } },
                _react2['default'].createElement(
                    _reactNative.Text,
                    null,
                    item
                )
            );
        };
        return _this;
    }

    (0, _createClass3['default'])(BasicListExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(_2.ListView, { onFetch: this.onFetch, keyExtractor: function keyExtractor(item, index) {
                    return _this2.state.layout + ' - ' + item + ' - ' + index;
                }, renderItem: this.renderItem, numColumns: this.state.layout === 'list' ? 1 : 3 });
        }
    }]);
    return BasicListExample;
}(_react2['default'].Component);

exports['default'] = BasicListExample;
var title = exports.title = 'ListView';
var description = exports.description = 'ListView Example';