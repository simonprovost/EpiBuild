import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from '../../';

var BasicCarouselExample = function (_React$Component) {
  _inherits(BasicCarouselExample, _React$Component);

  function BasicCarouselExample() {
    _classCallCheck(this, BasicCarouselExample);

    return _possibleConstructorReturn(this, (BasicCarouselExample.__proto__ || Object.getPrototypeOf(BasicCarouselExample)).apply(this, arguments));
  }

  _createClass(BasicCarouselExample, [{
    key: 'onHorizontalSelectedIndexChange',
    value: function onHorizontalSelectedIndexChange(index) {
      /* tslint:disable: no-console */
      console.log('horizontal change to', index);
    }
  }, {
    key: 'onVerticalSelectedIndexChange',
    value: function onVerticalSelectedIndexChange(index) {
      /* tslint:disable: no-console */
      console.log('vertical change to', index);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: { marginTop: 30 } },
        React.createElement(
          View,
          { style: { paddingHorizontal: 15 } },
          React.createElement(
            Text,
            null,
            'horizontal'
          ),
          React.createElement(
            Carousel,
            { style: styles.wrapper, selectedIndex: 2, autoplay: true, infinite: true, afterChange: this.onHorizontalSelectedIndexChange },
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'red' }] },
              React.createElement(
                Text,
                null,
                'Carousel 1'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'blue' }] },
              React.createElement(
                Text,
                null,
                'Carousel 2'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'yellow' }] },
              React.createElement(
                Text,
                null,
                'Carousel 3'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'aqua' }] },
              React.createElement(
                Text,
                null,
                'Carousel 4'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerHorizontal, { backgroundColor: 'fuchsia' }] },
              React.createElement(
                Text,
                null,
                'Carousel 5'
              )
            )
          ),
          React.createElement(
            Text,
            null,
            'Carousel will adjust height based on content'
          ),
          React.createElement(
            Text,
            null,
            React.Children.count(this.props.children)
          )
        ),
        React.createElement(
          View,
          { style: { paddingHorizontal: 15 } },
          React.createElement(
            Text,
            null,
            'vertical'
          ),
          React.createElement(
            Carousel,
            { style: styles.wrapper, selectedIndex: 2, autoplay: true, infinite: true, afterChange: this.onVerticalSelectedIndexChange, vertical: true },
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'red' }] },
              React.createElement(
                Text,
                null,
                'Carousel 1'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'blue' }] },
              React.createElement(
                Text,
                null,
                'Carousel 2'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'yellow' }] },
              React.createElement(
                Text,
                null,
                'Carousel 3'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'aqua' }] },
              React.createElement(
                Text,
                null,
                'Carousel 4'
              )
            ),
            React.createElement(
              View,
              { style: [styles.containerVertical, { backgroundColor: 'fuchsia' }] },
              React.createElement(
                Text,
                null,
                'Carousel 5'
              )
            )
          ),
          React.createElement(
            Text,
            null,
            'Use the height of the first child as the height of the Carousel'
          ),
          React.createElement(
            Text,
            null,
            React.Children.count(this.props.children)
          )
        )
      );
    }
  }]);

  return BasicCarouselExample;
}(React.Component);

export default BasicCarouselExample;

var styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff'
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  text: {
    color: '#fff',
    fontSize: 36
  }
});