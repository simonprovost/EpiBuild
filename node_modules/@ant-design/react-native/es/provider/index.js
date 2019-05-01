import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import * as React from 'react';
import LocaleProvider from '../locale-provider';
import Portal from '../portal';
import { ThemeProvider } from '../style';

var Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        LocaleProvider,
        { locale: this.props.locale },
        React.createElement(
          ThemeProvider,
          { value: this.props.theme },
          React.createElement(
            Portal.Host,
            null,
            this.props.children
          )
        )
      );
    }
  }]);

  return Provider;
}(React.Component);

export default Provider;