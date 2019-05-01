import { StyleSheet } from 'react-native';
export default (function (theme) {
    return StyleSheet.create({
        container: {},
        tabs: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: theme.fill_base,
            justifyContent: 'space-around',
            shadowRadius: 0,
            shadowOpacity: 0,
            elevation: 0
        },
        tab: {
            height: theme.tabs_height,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            flexDirection: 'row'
        },
        underline: {
            height: 2,
            backgroundColor: theme.tabs_color
        },
        textStyle: {
            fontSize: 15
        }
    });
});