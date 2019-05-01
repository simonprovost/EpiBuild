import { StyleSheet } from 'react-native';
export default (function (theme) {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        topTabBarSplitLine: {
            borderBottomColor: theme.border_color_base,
            borderBottomWidth: 1
        },
        bottomTabBarSplitLine: {
            borderTopColor: theme.border_color_base,
            borderTopWidth: 1
        }
    });
});