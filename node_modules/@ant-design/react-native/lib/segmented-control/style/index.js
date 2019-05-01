'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (theme) {
    return _reactNative.StyleSheet.create({
        segment: {
            flexDirection: 'row',
            overflow: 'hidden',
            borderWidth: _reactNative.StyleSheet.hairlineWidth,
            borderColor: theme.brand_primary,
            borderRadius: theme.radius_md
        },
        item: {
            flex: 1,
            paddingVertical: theme.h_spacing_sm,
            borderLeftWidth: _reactNative.StyleSheet.hairlineWidth,
            borderRightWidth: _reactNative.StyleSheet.hairlineWidth,
            borderStyle: 'solid',
            alignItems: 'center',
            justifyContent: 'center'
        },
        itemLeftRadius: {
            borderTopLeftRadius: theme.radius_md,
            borderBottomLeftRadius: theme.radius_md
        },
        itemRightRadius: {
            borderTopRightRadius: theme.radius_md,
            borderBottomRightRadius: theme.radius_md
        },
        itemText: {
            textAlign: 'center',
            fontSize: theme.font_size_caption_sm
        }
    });
};

module.exports = exports['default'];