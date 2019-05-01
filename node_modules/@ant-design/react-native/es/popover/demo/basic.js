import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Popover } from '../../';
var Item = Popover.Item;

var PopoverExample = function (_React$Component) {
  _inherits(PopoverExample, _React$Component);

  function PopoverExample(props) {
    _classCallCheck(this, PopoverExample);

    var _this = _possibleConstructorReturn(this, (PopoverExample.__proto__ || Object.getPrototypeOf(PopoverExample)).call(this, props));

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

  _createClass(PopoverExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var overlay = [1, 2, 3].map(function (i, index) {
        return React.createElement(
          Item,
          { key: index, value: 'option ' + i },
          React.createElement(
            Text,
            null,
            'option ',
            i
          )
        );
      });
      overlay = overlay.concat([React.createElement(
        Item,
        { key: '4', value: 'disabled', disabled: true },
        React.createElement(
          Text,
          { style: { color: '#ddd' } },
          'disabled opt'
        )
      ), React.createElement(
        Item,
        { key: '6', value: 'button ct', style: { backgroundColor: '#efeff4' } },
        React.createElement(
          Text,
          null,
          '\u5173\u95ED'
        )
      )]);
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          List,
          null,
          [1, 2, 3, 4, 5, 6, 7, 8].map(function (item) {
            return _this2.renderList(overlay, item);
          })
        ),
        React.createElement(
          Popover,
          { overlay: React.createElement(
              Popover.Item,
              { value: 'test' },
              React.createElement(
                Text,
                null,
                '\u81EA\u5B9A\u4E49\u7EC4\u4EF6 x'
              )
            ), renderOverlayComponent: function renderOverlayComponent(nodes) {
              return React.createElement(
                View,
                null,
                React.createElement(
                  Text,
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
          React.createElement(
            Text,
            { style: {
                margin: 16
              } },
            '\u81EA\u5B9A\u4E49\u7EC4\u4EF6'
          )
        ),
        React.createElement(
          View,
          { style: { alignItems: 'center' } },
          React.createElement(
            Text,
            { style: {
                margin: 16,
                color: 'red'
              } },
            '\u5982\u679C\u4F60\u8BBE\u7F6E\u4E86 placement \u5C5E\u6027\u8BF7\u786E\u4FDD\u4F60\u7684\u5185\u5BB9\u591F\u4F4D\u7F6E\u663E\u793A\uFF0C\u9ED8\u8BA4\u662F auto \u81EA\u52A8\u8BA1\u7B97\u4F4D\u7F6E'
          ),
          ['left', 'right', 'top', 'bottom'].map(function (p) {
            return React.createElement(
              Popover,
              { key: p, overlay: React.createElement(
                  Popover.Item,
                  { value: p },
                  React.createElement(
                    Text,
                    null,
                    '\u81EA\u5B9A\u4E49\u7EC4\u4EF6 ',
                    p
                  )
                ), placement: p },
              React.createElement(
                Text,
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

      return React.createElement(
        List.Item,
        { key: key, extra: React.createElement(
            Popover,
            { overlay: overlay, triggerStyle: styles.triggerStyle, onSelect: function onSelect(v) {
                return _this3.setState(_defineProperty({}, 'selected' + key, v));
              } },
            React.createElement(
              Text,
              null,
              '\u83DC\u5355'
            )
          ) },
        React.createElement(
          View,
          null,
          React.createElement(
            Text,
            null,
            '\u9009\u62E9\u4E86\uFF1A',
            this.state['selected' + key]
          )
        )
      );
    }
  }]);

  return PopoverExample;
}(React.Component);

export default PopoverExample;

var styles = StyleSheet.create({
  triggerStyle: {
    paddingHorizontal: 6
  }
});
export var title = 'Popover';
export var description = 'Popover example';