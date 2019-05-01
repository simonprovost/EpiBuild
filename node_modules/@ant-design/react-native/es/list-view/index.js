import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import { UltimateListView } from '@bang88/react-native-ultimate-listview';
import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import Icon from '../icon';
import { getComponentLocale } from '../_util/getLocale';
import zh_CN from './locale/zh_CN';

var ListView = function (_React$PureComponent) {
    _inherits(ListView, _React$PureComponent);

    function ListView() {
        _classCallCheck(this, ListView);

        var _this = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).apply(this, arguments));

        _this.refresh = function () {
            if (_this.ulv) {
                _this.ulv.refresh();
            }
        };
        return _this;
    }

    _createClass(ListView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                renderItem = _a.renderItem,
                props = __rest(_a, ["renderItem"]);
            // tslint:disable-next-line:variable-name
            var locale = getComponentLocale(this.props, this.context, 'ListView', function () {
                return zh_CN;
            });
            return React.createElement(UltimateListView, _extends({ key: 'ant-list-view', keyExtractor: function keyExtractor(_, index) {
                    return 'item-' + index;
                } // this is required when you are using FlatList
                , refreshableMode: Platform.OS === 'ios' ? 'advanced' : 'basic', numColumns: 1, waitingSpinnerText: locale.loading, allLoadedText: locale.done, refreshableTitlePull: locale.refreshableTitlePull, refreshableTitleRelease: locale.refreshableTitleRelease, refreshableTitleRefreshing: locale.refreshableTitleRefreshing, emptyView: function emptyView() {
                    return _this2.props.emptyView ? _this2.props.emptyView() : React.createElement(
                        View,
                        { style: {
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            } },
                        React.createElement(
                            Text,
                            { style: { textAlign: 'center', padding: '10%' } },
                            locale.noData
                        )
                    );
                }, customRefreshView: function customRefreshView(status) {
                    return React.createElement(
                        View,
                        { style: { flexDirection: 'row' } },
                        status === 2 ? React.createElement(ActivityIndicator, null) : React.createElement(Icon, { name: status === 0 ? 'arrow-down' : 'arrow-up', size: 18 }),
                        React.createElement(
                            Text,
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
}(React.PureComponent);

ListView.contextTypes = {
    antLocale: PropTypes.object
};
export default ListView;