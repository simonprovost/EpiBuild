'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        numberStyle: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        totalStyle: {
            fontSize: 18,
            color: theme.color_text_base
        },
        activeTextStyle: {
            fontSize: 18,
            color: theme.color_link
        },
        indicatorStyle: {
            flexDirection: 'row'
        },
        pointStyle: {
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: theme.input_color_icon
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