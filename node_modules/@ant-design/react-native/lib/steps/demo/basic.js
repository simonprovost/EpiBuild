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

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Step = _.Steps.Step;

var BasicTimelineExample = function (_React$Component) {
  (0, _inherits3['default'])(BasicTimelineExample, _React$Component);

  function BasicTimelineExample(props) {
    (0, _classCallCheck3['default'])(this, BasicTimelineExample);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BasicTimelineExample.__proto__ || Object.getPrototypeOf(BasicTimelineExample)).call(this, props));

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

  (0, _createClass3['default'])(BasicTimelineExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        _reactNative.ScrollView,
        { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
        _react2['default'].createElement(
          _reactNative.View,
          { style: { marginTop: 60 } },
          _react2['default'].createElement(
            _.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _.Steps,
              { size: 'small', current: 1, direction: 'horizontal' },
              this.state.steps1.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _react2['default'].createElement(
                      _reactNative.Text,
                      null,
                      'title:',
                      item.title
                    )
                  ), status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          { style: { marginTop: 60 } },
          _react2['default'].createElement(
            _.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _.Steps,
              { size: 'small', current: 1 },
              this.state.steps1.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _react2['default'].createElement(
                      _reactNative.Text,
                      null,
                      'title:',
                      item.title
                    )
                  ), description: _react2['default'].createElement(
                    _reactNative.View,
                    null,
                    _react2['default'].createElement(
                      _reactNative.Text,
                      null,
                      'desc:',
                      item.description
                    )
                  ), status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _.Steps,
              { size: 'small' },
              this.state.steps2.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _.Steps,
              { current: 1 },
              this.state.steps1.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _.Steps,
              null,
              this.state.steps2.map(function (item, index) {
                return _react2['default'].createElement(Step, { key: index, title: item.title, description: item.description, status: item.status });
              })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _.Steps,
              { current: 1 },
              _react2['default'].createElement(Step, { key: 0, title: 'Finished', description: 'This is description', status: 'finish' }),
              _react2['default'].createElement(Step, { key: 1, title: 'Progress', description: 'This is description', status: 'progress' }),
              _react2['default'].createElement(Step, { key: 2, title: 'Wait', description: 'This is description', status: 'wait', icon: _react2['default'].createElement(_.Icon, { name: 'down', size: 20, color: 'white' }) })
            )
          )
        ),
        _react2['default'].createElement(
          _reactNative.View,
          null,
          _react2['default'].createElement(
            _.WingBlank,
            { size: 'lg' },
            _react2['default'].createElement(
              _.Steps,
              { current: 1 },
              _react2['default'].createElement(Step, { key: 0, title: 'Finished', description: 'This is description', status: 'finish', renderIcon: function renderIcon(_ref) {
                  var starting = _ref.starting,
                      waiting = _ref.waiting,
                      error = _ref.error;

                  var icon = void 0;
                  if (starting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'user' });
                  } else if (error) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'star' });
                  }
                  return icon;
                } }),
              _react2['default'].createElement(Step, { key: 1, title: 'Progress', description: 'This is description', status: 'progress', renderIcon: function renderIcon(_ref2) {
                  var starting = _ref2.starting,
                      waiting = _ref2.waiting,
                      error = _ref2.error;

                  var icon = void 0;
                  if (starting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'user' });
                  } else if (error) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'star' });
                  }
                  return icon;
                } }),
              _react2['default'].createElement(Step, { key: 2, title: 'Wait', description: 'This is description', status: 'wait', renderIcon: function renderIcon(_ref3) {
                  var starting = _ref3.starting,
                      waiting = _ref3.waiting,
                      error = _ref3.error;

                  var icon = void 0;
                  if (starting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'user' });
                  } else if (error) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'star' });
                  }
                  return icon;
                } }),
              _react2['default'].createElement(Step, { key: 3, title: 'Wait', description: 'This is description', status: 'error', renderIcon: function renderIcon(_ref4) {
                  var starting = _ref4.starting,
                      waiting = _ref4.waiting,
                      error = _ref4.error;

                  var icon = void 0;
                  if (starting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'home' });
                  } else if (waiting) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'user' });
                  } else if (error) {
                    icon = _react2['default'].createElement(_.Icon, { name: 'star' });
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
}(_react2['default'].Component);

exports['default'] = BasicTimelineExample;
module.exports = exports['default'];