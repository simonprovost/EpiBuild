'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        content: {
            backgroundColor: theme.fill_base,
            borderRadius: theme.radius_sm,
            padding: 0,
            elevation: 3
        },
        arrow: {
            borderTopColor: 'transparent'
        },
        background: {
            backgroundColor: 'transparent'
        }
    });
};

module.exports = exports['default'];