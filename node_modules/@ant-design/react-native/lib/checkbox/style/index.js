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
            width: theme.icon_size_sm,
            height: theme.icon_size_sm
        },
        iconRight: {
            marginLeft: theme.h_spacing_md
        },
        agreeItem: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        agreeItemCheckbox: {
            marginLeft: theme.h_spacing_lg,
            marginRight: theme.h_spacing_md
        },
        checkboxItemCheckbox: {
            marginRight: theme.h_spacing_md,
            alignSelf: 'center'
        }
    });
};

module.exports = exports['default'];