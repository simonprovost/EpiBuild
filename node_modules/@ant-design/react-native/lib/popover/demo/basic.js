'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.description = exports.title = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var Item = _.Popover.Item;

var PopoverExample = function (_React$Component) {
  (0, _inherits3['default'])(PopoverExample, _React$Component);

  function PopoverExample(props) {
    (0, _classCallCheck3['default'])(this, PopoverExample);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (PopoverExample.__proto__ || Object.getPrototypeOf(PopoverExample)).call(this, props));

    _this.onSelect = function (value) {
      _this.setState({
        // visible: false,
        selected: value
      });
    };
    _this.state = {
      selected: ''
    };
    return _this;
  }

  (0, _createClass3['default'])(PopoverExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var overlay = [1, 2, 3].map(function (i, index) {
        return _react2['default'].createElement(
          Item,
          { key: index, value: 'option ' + i },
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            'option ',
            i
          )
        );
      });
      overlay = overlay.concat([_react2['default'].createElement(
        Item,
        { key: '4', value: 'disabled', disabled: true },
        _react2['default'].createElement(
          _reactNative.Text,
          { style: { color: '#ddd' } },
          'disabled opt'
        )
      ), _react2['default'].createElement(
        Item,
        { key: '6', value: 'button ct', style: { backgroundColor: '#efeff4' } },
        _react2['default'].createElement(
          _reactNative.Text,
          null,
          '\u5173\u95ED'
        )
      )]);
      return _react2['default'].createElement(
        _react2['default'].Fragment,
        null,
        _react2['default'].createElement(
          _.List,
          null,
          [1, 2, 3, 4, 5, 6, 7, 8].map(function (item) {
            return _this2.renderList(overlay, item);
          })
        ),
        _react2['default'].createElement(
          _.Popover,
          { overlay: _react2['default'].createElement(
              _.Popover.Item,
              { value: 'test' },
              _react2['default'].createElement(
                _reactNative.Text,
                null,
                '\u81EA\u5B9A\u4E49\u7EC4\u4EF6 x'
              )
            ), renderOverlayComponent: function renderOverlayComponent(nodes) {
              return _react2['default'].createElement(
                _reactNative.View,
                null,
                _react2['default'].createElement(
                  _reactNative.Text,
                  { style: {
                      paddingHorizontal: 9,
                      paddingTop: 16,
                      color: '#2b2b2b',
                      fontWeight: 'bold'
                    } },
                  '\u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6title'
                ),
                nodes
              );
            } },
          _react2['default'].createElement(
            _reactNative.Text,
            { style: {
                margin: 16
              } },
            '\u81EA\u5B9A\u4E49\u7EC4\u4EF6'
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          { style: { alignItems: 'center' } },
          _react2['default'].createElement(
            _reactNative.Text,
            { style: {
                margin: 16,
                color: 'red'
              } },
            '\u5982\u679C\u4F60\u8BBE\u7F6E\u4E86 placement \u5C5E\u6027\u8BF7\u786E\u4FDD\u4F60\u7684\u5185\u5BB9\u591F\u4F4D\u7F6E\u663E\u793A\uFF0C\u9ED8\u8BA4\u662F auto \u81EA\u52A8\u8BA1\u7B97\u4F4D\u7F6E'
          ),
          ['left', 'right', 'top', 'bottom'].map(function (p) {
            return _react2['default'].createElement(
              _.Popover,
              { key: p, overlay: _react2['default'].createElement(
                  _.Popover.Item,
                  { value: p },
                  _react2['default'].createElement(
                    _reactNative.Text,
                    null,
                    '\u81EA\u5B9A\u4E49\u7EC4\u4EF6 ',
                    p
                  )
                ), placement: p },
              _react2['default'].createElement(
                _reactNative.Text,
                { style: {
                    margin: 16
                  } },
                p
              )
            );
          })
        )
      );
    }
  }, {
    key: 'renderList',
    value: function renderList(overlay, key) {
      var _this3 = this;

      return _react2['default'].createElement(
        _.List.Item,
        { key: key, extra: _react2['default'].createElement(
            _.Popover,
            { overlay: overlay, triggerStyle: styles.triggerStyle, onSelect: function onSelect(v) {
                return _this3.setState((0, _defineProperty3['default'])({}, 'selected' + key, v));
              } },
            _react2['default'].createElement(
              _reactNative.Text,
              null,
              '\u83DC\u5355'
            )
          ) },
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _reactNative.Text,
            null,
            '\u9009\u62E9\u4E86\uFF1A',
            this.state['selected' + key]
          )
        )
      );
    }
  }]);
  return PopoverExample;
}(_react2['default'].Component);

exports['default'] = PopoverExample;

var styles = _reactNative.StyleSheet.create({
  triggerStyle: {
    paddingHorizontal: 6
  }
});
var title = exports.title = 'Popover';
var description = exports.description = 'Popover example';