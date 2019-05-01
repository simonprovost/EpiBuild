import { StyleSheet } from 'react-native';
export default (function (theme) {
    return StyleSheet.create({
        container: {
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: theme.border_color_base
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: theme.h_spacing_lg,
            paddingRight: 2 * theme.h_spacing_lg,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.border_color_base
        },
        arrow: {
            color: theme.color_icon_base
        },
        headerWrap: {
            flex: 1,
            height: theme.list_item_height,
            alignItems: 'center',
            flexDirection: 'row'
        },
        headerText: {
            color: theme.color_text_base,
            fontSize: theme.font_size_heading
        },
        content: {
            paddingVertical: theme.v_spacing_md,
            paddingHorizontal: theme.h_spacing_md,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: theme.border_color_base
        },
        contentText: {
            fontSize: theme.font_size_subhead,
            color: theme.color_text_paragraph
        }
    });
});