'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        container: {
            flex: 1
        },
        topTabBarSplitLine: {
            borderBottomColor: theme.border_color_base,
            borderBottomWidth: 1
        },
        bottomTabBarSplitLine: {
            borderTopColor: theme.border_color_base,
            borderTopWidth: 1
        }
    });
};

module.exports = exports['default'];