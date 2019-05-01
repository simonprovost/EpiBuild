'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

exports['default'] = function (variables) {
    return _reactNative.StyleSheet.create({
        notice: {
            backgroundColor: variables.notice_bar_fill,
            height: variables.notice_bar_height,
            overflow: 'hidden',
            flexDirection: 'row',
            alignItems: 'center'
        },
        container: {
            flex: 1,
            marginRight: variables.h_spacing_lg,
            overflow: 'hidden',
            width: 0
        },
        content: {
            fontSize: variables.font_size_subhead,
            color: variables.brand_warning
        },
        left6: {
            marginLeft: variables.h_spacing_sm
        },
        left15: {
            marginLeft: variables.h_spacing_lg
        },
        actionWrap: {
            marginRight: variables.h_spacing_lg
        },
        close: {
            color: variables.brand_warning,
            fontSize: 18,
            fontWeight: '200',
            textAlign: 'left'
        },
        link: {
            transform: [{ rotate: '225deg' }],
            color: variables.brand_warning,
            fontSize: variables.font_size_icontext,
            fontWeight: '500',
            textAlign: 'left'
        }
    });
};

module.exports = exports['default'];