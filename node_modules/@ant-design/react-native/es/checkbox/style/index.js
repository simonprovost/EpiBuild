import { StyleSheet } from 'react-native';
export default (function (theme) {
    return StyleSheet.create({
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
});