import { StyleSheet } from 'react-native';
export default (function (theme) {
    return StyleSheet.create({
        progressOuter: {
            backgroundColor: theme.border_color_base,
            flex: 1
        },
        progressBar: {
            borderBottomWidth: 4,
            borderStyle: 'solid',
            borderColor: theme.brand_primary
        }
    });
});