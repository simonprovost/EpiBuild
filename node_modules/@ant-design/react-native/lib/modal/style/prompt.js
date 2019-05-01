'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (variables) {
    return _reactNative.StyleSheet.create({
        message: {
            marginTop: variables.v_spacing_lg,
            color: variables.color_text_caption,
            fontSize: variables.font_size_base,
            textAlign: 'center'
        },
        inputGroup: {
            marginTop: variables.v_spacing_md,
            flexDirection: 'column'
        },
        inputWrapper: {
            borderWidth: _reactNative.StyleSheet.hairlineWidth,
            borderTopWidth: 0,
            borderColor: variables.border_color_base
        },
        input: {
            height: 36,
            fontSize: variables.font_size_base,
            paddingHorizontal: variables.h_spacing_sm,
            paddingVertical: 0
        },
        inputFirst: {
            borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
            borderTopLeftRadius: variables.radius_sm,
            borderTopRightRadius: variables.radius_sm
        },
        inputLast: {
            borderBottomLeftRadius: variables.radius_sm,
            borderBottomRightRadius: variables.radius_sm
        }
    });
};

module.exports = exports['default'];