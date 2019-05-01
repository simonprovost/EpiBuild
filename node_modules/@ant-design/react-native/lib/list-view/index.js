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

var _reactNativeUltimateListview = require('@bang88/react-native-ultimate-listview');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _getLocale = require('../_util/getLocale');

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var ListView = function (_React$PureComponent) {
    (0, _inherits3['default'])(ListView, _React$PureComponent);

    function ListView() {
        (0, _classCallCheck3['default'])(this, ListView);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));

        _this.refresh = function () {
            if (_this.ulv) {
                _this.ulv.refresh();
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(ListView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                renderItem = _a.renderItem,
                props = __rest(_a, ["renderItem"]);
            // tslint:disable-next-line:variable-name
            var locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'ListView', function () {
                return _zh_CN2['default'];
            });
            return _react2['default'].createElement(_reactNativeUltimateListview.UltimateListView, (0, _extends3['default'])({ key: 'ant-list-view', keyExtractor: function keyExtractor(_, index) {
                    return 'item-' + index;
                } // this is required when you are using FlatList
                , refreshableMode: _reactNative.Platform.OS === 'ios' ? 'advanced' : 'basic', numColumns: 1, waitingSpinnerText: locale.loading, allLoadedText: locale.done, refreshableTitlePull: locale.refreshableTitlePull, refreshableTitleRelease: locale.refreshableTitleRelease, refreshableTitleRefreshing: locale.refreshableTitleRefreshing, emptyView: function emptyView() {
                    return _this2.props.emptyView ? _this2.props.emptyView() : _react2['default'].createElement(
                        _reactNative.View,
                        { style: {
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { textAlign: 'center', padding: '10%' } },
                            locale.noData
                        )
                    );
                }, customRefreshView: function customRefreshView(status) {
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: { flexDirection: 'row' } },
                        status === 2 ? _react2['default'].createElement(_reactNative.ActivityIndicator, null) : _react2['default'].createElement(_icon2['default'], { name: status === 0 ? 'arrow-down' : 'arrow-up', size: 18 }),
                        _react2['default'].createElement(
                            _reactNative.Text,
                            { style: { marginLeft: 5 } },
                            status === 0 ? locale.refreshableTitlePull : status === 1 ? locale.refreshableTitleRelease : locale.refreshableTitleRefreshing
                        )
                    );
                } }, props, { item: renderItem, ref: function ref(_ref) {
                    return _this2.ulv = _ref;
                } }));
        }
    }]);
    return ListView;
}(_react2['default'].PureComponent);

ListView.contextTypes = {
    antLocale: _propTypes2['default'].object
};
exports['default'] = ListView;
module.exports = exports['default'];