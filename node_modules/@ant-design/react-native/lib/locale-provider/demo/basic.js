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

var _ = require('..');

var _2 = _interopRequireDefault(_);

var _3 = require('../../');

var _en_US = require('../en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _es_ES = require('../es_ES');

var _es_ES2 = _interopRequireDefault(_es_ES);

var _ru_RU = require('../ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _zh_CN = require('../zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxDate = new Date(2018, 11, 3, 22, 0);
var minDate = new Date(2015, 7, 6, 8, 30);
var seasons = [[{
    label: '2013',
    value: '2013'
}, {
    label: '2014',
    value: '2014'
}], [{
    label: '春',
    value: '春'
}, {
    label: '夏',
    value: '夏'
}]];
var Page = function Page() {
    return _react2['default'].createElement(
        _reactNative.View,
        null,
        _react2['default'].createElement(_3.Pagination, { total: 5, current: 1 }),
        _react2['default'].createElement(_3.WhiteSpace, null),
        _react2['default'].createElement(
            _3.List,
            { style: { backgroundColor: 'white' } },
            _react2['default'].createElement(
                _3.DatePicker,
                { mode: 'date', title: 'Select date', minDate: minDate, maxDate: maxDate },
                _react2['default'].createElement(
                    _3.List.Item,
                    { arrow: 'horizontal' },
                    'DatePicker'
                )
            ),
            _react2['default'].createElement(
                _3.Picker,
                { data: seasons, cascade: false },
                _react2['default'].createElement(
                    _3.List.Item,
                    { arrow: 'horizontal' },
                    'Picker'
                )
            ),
            _react2['default'].createElement(_3.WhiteSpace, null),
            _react2['default'].createElement(_3.SearchBar, { placeholder: 'Search', showCancelButton: true })
        )
    );
};

var LocaleProviderExample = function (_React$Component) {
    (0, _inherits3['default'])(LocaleProviderExample, _React$Component);

    function LocaleProviderExample(props) {
        (0, _classCallCheck3['default'])(this, LocaleProviderExample);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (LocaleProviderExample.__proto__ || Object.getPrototypeOf(LocaleProviderExample)).call(this, props));

        _this.onChange = function (value) {
            _this.setState({
                locale: value[0]
            });
        };
        _this.state = {
            locale: 'English'
        };
        return _this;
    }

    (0, _createClass3['default'])(LocaleProviderExample, [{
        key: 'render',
        value: function render() {
            var locale = this.state.locale;

            var languages = [{
                value: '中国',
                label: '中国',
                language: _zh_CN2['default']
            }, {
                value: 'English',
                label: 'English',
                language: _en_US2['default']
            }, {
                value: 'Русский',
                label: 'Русский',
                language: _ru_RU2['default']
            }, {
                value: 'Español',
                label: 'Español',
                language: _es_ES2['default']
            }];
            var currentLocale = languages.find(function (item) {
                return item.value === locale;
            }).language;
            return _react2['default'].createElement(
                _3.WingBlank,
                null,
                _react2['default'].createElement(
                    _3.Picker,
                    { data: languages, onChange: this.onChange, cols: 1, value: [locale] },
                    _react2['default'].createElement(
                        _3.List.Item,
                        { arrow: 'horizontal' },
                        'Choose language'
                    )
                ),
                _react2['default'].createElement(_3.WhiteSpace, null),
                _react2['default'].createElement(
                    _2['default'],
                    { locale: currentLocale },
                    _react2['default'].createElement(Page, null)
                )
            );
        }
    }]);
    return LocaleProviderExample;
}(_react2['default'].Component);

exports['default'] = LocaleProviderExample;
module.exports = exports['default'];