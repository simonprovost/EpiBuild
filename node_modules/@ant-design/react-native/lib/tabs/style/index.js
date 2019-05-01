'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        container: {},
        tabs: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: theme.fill_base,
            justifyContent: 'space-around',
            shadowRadius: 0,
            shadowOpacity: 0,
            elevation: 0
        },
        tab: {
            height: theme.tabs_height,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            flexDirection: 'row'
        },
        underline: {
            height: 2,
            backgroundColor: theme.tabs_color
        },
        textStyle: {
            fontSize: 15
        }
    });
};

module.exports = exports['default'];