'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        progressOuter: {
            backgroundColor: theme.border_color_base,
            flex: 1
        },
        progressBar: {
            borderBottomWidth: 4,
            borderStyle: 'solid',
            borderColor: theme.brand_primary
        }
    });
};

module.exports = exports['default'];