import { StyleSheet } from 'react-native';
export default (function (theme) {
    return StyleSheet.create({
        content: {
            backgroundColor: theme.fill_base,
            borderRadius: theme.radius_sm,
            padding: 0,
            elevation: 3
        },
        arrow: {
            borderTopColor: 'transparent'
        },
        background: {
            backgroundColor: 'transparent'
        }
    });
});