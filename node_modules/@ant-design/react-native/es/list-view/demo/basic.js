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
import { Text, View } from 'react-native';
import { ListView } from '../../';

var BasicListExample = function (_React$Component) {
    _inherits(BasicListExample, _React$Component);

    function BasicListExample() {
        _classCallCheck(this, BasicListExample);

        var _this = _possibleConstructorReturn(this, (BasicListExample.__proto__ || Object.getPrototypeOf(BasicListExample)).apply(this, arguments));

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
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
                var pageLimit, skip, rowData;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
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
            return React.createElement(
                View,
                { style: { padding: 10 } },
                React.createElement(
                    Text,
                    null,
                    item
                )
            );
        };
        return _this;
    }

    _createClass(BasicListExample, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(ListView, { onFetch: this.onFetch, keyExtractor: function keyExtractor(item, index) {
                    return _this2.state.layout + ' - ' + item + ' - ' + index;
                }, renderItem: this.renderItem, numColumns: this.state.layout === 'list' ? 1 : 3 });
        }
    }]);

    return BasicListExample;
}(React.Component);

export default BasicListExample;

export var title = 'ListView';
export var description = 'ListView Example';