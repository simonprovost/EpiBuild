import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, Portal } from '../..';

var PopoverExample = function (_React$Component) {
  _inherits(PopoverExample, _React$Component);

  function PopoverExample() {
    _classCallCheck(this, PopoverExample);

    return _possibleConstructorReturn(this, (PopoverExample.__proto__ || Object.getPrototypeOf(PopoverExample)).apply(this, arguments));
  }

  _createClass(PopoverExample, [{
    key: 'render',
    value: function render() {
      var key = void 0;
      var contents = React.createElement(
        View,
        { style: { backgroundColor: 'green', padding: 100 } },
        React.createElement(
          Button,
          { onPress: function onPress() {
              Portal.remove(key);
            }, type: 'primary', style: {
              position: 'absolute',
              top: 100,
              right: 0
            } },
          React.createElement(Icon, { name: 'close-circle' })
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            Text,
            null,
            '\u81EA\u5B9A\u4E49Portal'
          )
        )
      );
      return React.createElement(
        View,
        null,
        React.createElement(
          Button,
          { onPress: function onPress() {
              key = Portal.add(contents);
            } },
          'Open Portal'
        )
      );
    }
  }]);

  return PopoverExample;
}(React.Component);

export default PopoverExample;

export var title = 'Portal';
export var description = 'Portal example';