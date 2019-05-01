'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        pagination: {
            position: 'absolute',
            alignItems: 'center'
        },
        paginationX: {
            bottom: 10,
            left: 0,
            right: 0
        },
        paginationY: {
            right: 10,
            top: 0,
            bottom: 0
        },
        pointStyle: {
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: theme.color_icon_base
        },
        pointActiveStyle: {
            backgroundColor: '#888'
        },
        spaceStyle: {
            marginHorizontal: theme.h_spacing_sm / 2,
            marginVertical: theme.v_spacing_sm / 2
        }
    });
};

module.exports = exports['default'];