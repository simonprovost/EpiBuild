'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        result: {
            alignItems: 'center',
            paddingVertical: theme.v_spacing_xl,
            backgroundColor: theme.fill_base,
            borderBottomColor: theme.border_color_base
        },
        imgWrap: {
            margin: 0
        },
        img: {
            width: 60,
            height: 60
        },
        title: {
            marginTop: theme.v_spacing_lg,
            paddingHorizontal: theme.h_spacing_lg
        },
        titleText: {
            fontSize: 21,
            color: theme.color_text_base
        },
        message: {
            marginTop: theme.v_spacing_lg,
            paddingHorizontal: theme.h_spacing_lg
        },
        messageText: {
            fontSize: theme.font_size_caption,
            color: theme.color_text_caption
        },
        buttonWrap: {
            flexDirection: 'row',
            marginTop: theme.v_spacing_lg,
            paddingHorizontal: theme.h_spacing_lg
        },
        button: {
            flex: 1
        }
    });
};

module.exports = exports['default'];