import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Icon, Steps, WingBlank } from '../../';
var Step = Steps.Step;

var BasicTimelineExample = function (_React$Component) {
  _inherits(BasicTimelineExample, _React$Component);

  function BasicTimelineExample(props) {
    _classCallCheck(this, BasicTimelineExample);

    var _this = _possibleConstructorReturn(this, (BasicTimelineExample.__proto__ || Object.getPrototypeOf(BasicTimelineExample)).call(this, props));

    _this.state = {
      steps1: [{ title: 'Finished', description: 'This is description' }, { title: 'In Progress', description: 'This is description' }, { title: 'Waiting', description: 'This is description' }],
      steps2: [{
        title: 'Finished',
        description: 'This is description',
        status: 'finish'
      }, {
        title: 'In Progress',
        description: 'This is description',
        status: 'process'
      }, {
        title: 'Waiting',
        description: 'This is description',
        status: 'error'
      }, {
        title: 'Waiting',
        description: 'This is description',
        status: 'wait'
      }]
    };
    return _this;
  }

  _createClass(BasicTimelineExample, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        React.createElement(
          View,
          { style: { marginTop: 60 } },
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { size: 'small', current: 1, direction: 'horizontal' },
              this.state.steps1.map(function (item, index) {
                return React.createElement(Step, { key: index, title: React.createElement(
                    View,
                    null,
                    React.createElement(
                      Text,
                      null,
                      'title:',
                      item.title
                    )
                  ), status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          { style: { marginTop: 60 } },
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { size: 'small', current: 1 },
              this.state.steps1.map(function (item, index) {
                return React.createElement(Step, { key: index, title: React.createElement(
                    View,
                    null,
                    React.createElement(
                      Text,
                      null,
                      'title:',
                      item.title
                    )
                  ), description: React.createElement(
                    View,
                    null,
                    React.createElement(
                      Text,
                      null,
                      'desc:',
                      item.description
                    )
                  ), status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { size: 'small' },
              this.state.steps2.map(function (item, index) {
                return React.createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { current: 1 },
              this.state.steps1.map(function (item, index) {
                return React.createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              null,
              this.state.steps2.map(function (item, index) {
                return React.createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { current: 1 },
              React.createElement(Step, { key: 0, title: 'Finished', description: 'This is description', status: 'finish' }),
              React.createElement(Step, { key: 1, title: 'Progress', description: 'This is description', status: 'progress' }),
              React.createElement(Step, { key: 2, title: 'Wait', description: 'This is description', status: 'wait', icon: React.createElement(Icon, { name: 'down', size: 20, color: 'white' }) })
            )
          )
        ),
        React.createElement(
          View,
          null,
          React.createElement(
            WingBlank,
            { size: 'lg' },
            React.createElement(
              Steps,
              { current: 1 },
              React.createElement(Step, { key: 0, title: 'Finished', description: 'This is description', status: 'finish', renderIcon: function renderIcon(_ref) {
                  var starting = _ref.starting,
                      waiting = _ref.waiting,
                      error = _ref.error;

                  var icon = void 0;
                  if (starting) {
                    icon = React.createElement(Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = React.createElement(Icon, { name: 'user' });
                  } else if (error) {
                    icon = React.createElement(Icon, { name: 'star' });
                  }
                  return icon;
                } }),
              React.createElement(Step, { key: 1, title: 'Progress', description: 'This is description', status: 'progress', renderIcon: function renderIcon(_ref2) {
                  var starting = _ref2.starting,
                      waiting = _ref2.waiting,
                      error = _ref2.error;

                  var icon = void 0;
                  if (starting) {
                    icon = React.createElement(Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = React.createElement(Icon, { name: 'user' });
                  } else if (error) {
                    icon = React.createElement(Icon, { name: 'star' });
                  }
                  return icon;
                } }),
              React.createElement(Step, { key: 2, title: 'Wait', description: 'This is description', status: 'wait', renderIcon: function renderIcon(_ref3) {
                  var starting = _ref3.starting,
                      waiting = _ref3.waiting,
                      error = _ref3.error;

                  var icon = void 0;
                  if (starting) {
                    icon = React.createElement(Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = React.createElement(Icon, { name: 'user' });
                  } else if (error) {
                    icon = React.createElement(Icon, { name: 'star' });
                  }
                  return icon;
                } }),
              React.createElement(Step, { key: 3, title: 'Wait', description: 'This is description', status: 'error', renderIcon: function renderIcon(_ref4) {
                  var starting = _ref4.starting,
                      waiting = _ref4.waiting,
                      error = _ref4.error;

                  var icon = void 0;
                  if (starting) {
                    icon = React.createElement(Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = React.createElement(Icon, { name: 'user' });
                  } else if (error) {
                    icon = React.createElement(Icon, { name: 'star' });
                  }
                  return icon;
                } })
            )
          )
        )
      );
    }
  }]);

  return BasicTimelineExample;
}(React.Component);

export default BasicTimelineExample;