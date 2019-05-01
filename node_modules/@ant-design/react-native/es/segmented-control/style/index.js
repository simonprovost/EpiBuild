import { StyleSheet } from 'react-native';
export default (function (theme) {
    return StyleSheet.create({
        segment: {
            flexDirection: 'row',
            overflow: 'hidden',
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: theme.brand_primary,
            borderRadius: theme.radius_md
        },
        item: {
            flex: 1,
            paddingVertical: theme.h_spacing_sm,
            borderLeftWidth: StyleSheet.hairlineWidth,
            borderRightWidth: StyleSheet.hairlineWidth,
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
});