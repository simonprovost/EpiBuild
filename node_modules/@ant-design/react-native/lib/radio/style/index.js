'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        wrapper: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        icon: {
            // width: variables.icon_size_xxs,
            // height: variables.icon_size_xxs * 0.8,
        },
        radioItem: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        radioItemRadio: {
            marginLeft: theme.h_spacing_lg,
            marginRight: theme.h_spacing_md
        },
        radioItemContent: {
            color: theme.color_text_base,
            fontSize: theme.font_size_heading
        },
        radioItemContentDisable: {
            color: theme.color_text_disabled
        }
    });
};

module.exports = exports['default'];