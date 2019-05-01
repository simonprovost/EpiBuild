'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var grid = 4;

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        wrap: {
            flexDirection: 'row'
        },
        textCornerWrap: {
            overflow: 'hidden'
        },
        dot: {
            width: 2 * grid,
            height: 2 * grid,
            borderRadius: grid,
            backgroundColor: theme.brand_important,
            position: 'absolute',
            top: -1 * grid,
            right: -1 * grid
        },
        dotSizelarge: {
            width: 4 * grid,
            height: 4 * grid,
            borderRadius: 2 * grid
        },
        textDom: {
            paddingVertical: 0.5 * grid,
            paddingHorizontal: (_reactNative.Platform.OS === 'ios' ? 1.5 : 2) * grid,
            backgroundColor: theme.brand_important,
            borderRadius: 4 * theme.radius_sm,
            borderStyle: 'solid',
            position: 'absolute',
            top: -10,
            right: -15
        },
        textCorner: {
            width: 18 * grid,
            backgroundColor: theme.brand_important,
            transform: [{
                rotate: '45deg'
            }],
            position: 'absolute',
            top: 2 * grid
        },
        textCornerlarge: {
            width: 26 * grid,
            top: 3 * grid
        },
        text: {
            color: theme.color_text_base_inverse,
            textAlign: 'center'
        }
    });
};

module.exports = exports['default'];