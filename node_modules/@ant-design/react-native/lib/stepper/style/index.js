'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        input: {
            flex: 1,
            textAlign: 'center',
            paddingHorizontal: 8,
            fontSize: theme.input_font_size,
            color: theme.color_text_base
        },
        stepWrap: {
            width: 28,
            height: 28,
            borderWidth: theme.border_width_md,
            borderColor: theme.border_color_base,
            borderRadius: theme.radius_md,
            backgroundColor: theme.fill_base
        },
        stepText: {
            textAlign: 'center',
            fontSize: 20,
            color: theme.color_text_placeholder,
            backgroundColor: 'transparent'
        },
        stepDisabled: {
            borderColor: theme.color_text_disabled,
            backgroundColor: theme.fill_disabled
        },
        disabledStepTextColor: {
            color: theme.color_text_disabled
        },
        highlightStepTextColor: {
            color: theme.brand_primary
        },
        highlightStepBorderColor: {
            borderColor: theme.brand_primary
        }
    });
};

module.exports = exports['default'];