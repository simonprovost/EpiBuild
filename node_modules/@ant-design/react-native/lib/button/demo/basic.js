'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:no-console */
/* tslint:disable:no-unused-variable */
exports['default'] = function () {
  return _react2['default'].createElement(
    _.WingBlank,
    null,
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      null,
      'default'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      { disabled: true },
      'default disabled'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      { type: 'primary' },
      'primary'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      { type: 'primary', disabled: true },
      'primary disabled'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      { type: 'warning' },
      'warning'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      { type: 'warning', disabled: true },
      'warning disabled'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      { loading: true },
      'loading button'
    ),
    _react2['default'].createElement(
      _.Button,
      { activeStyle: false },
      '\u65E0\u70B9\u51FB\u53CD\u9988'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.Button,
      { activeStyle: { backgroundColor: 'red' } },
      'custom feedback style'
    ),
    _react2['default'].createElement(_.WhiteSpace, null),
    _react2['default'].createElement(
      _.WingBlank,
      { style: {
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        } },
      _react2['default'].createElement(
        _.Button,
        { type: 'ghost' },
        'ghost'
      ),
      _react2['default'].createElement(
        _.Button,
        { type: 'ghost', disabled: true },
        'ghost disabled'
      ),
      _react2['default'].createElement(
        _.Button,
        { type: 'ghost', size: 'small' },
        'ghost'
      )
    )
  );
};

module.exports = exports['default'];