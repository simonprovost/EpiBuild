import { StyleSheet } from 'react-native';
var grid = 4;
export default (function (theme) {
    return StyleSheet.create({
        head_default_s: {
            width: 18,
            height: 18,
            backgroundColor: theme.fill_base,
            borderRadius: 18,
            borderWidth: theme.border_width_lg,
            borderColor: theme.brand_primary,
            borderStyle: 'solid',
            overflow: 'hidden'
        },
        head_blue_s: {
            borderColor: theme.brand_primary
        },
        head_gray_s: {
            borderColor: theme.color_text_placeholder
        },
        head_red_s: {
            borderColor: theme.brand_error
        },
        icon_s: {
            fontSize: 14
        },
        head_default_l: {
            width: 24,
            height: 24,
            backgroundColor: theme.fill_base,
            borderRadius: 18,
            borderWidth: theme.border_width_lg,
            borderColor: theme.brand_primary,
            borderStyle: 'solid',
            overflow: 'hidden'
        },
        head_blue_l: {
            borderColor: theme.brand_primary,
            backgroundColor: theme.brand_primary
        },
        head_gray_l: {
            borderColor: theme.color_text_placeholder,
            backgroundColor: theme.color_text_placeholder
        },
        head_red_l: {
            borderColor: theme.brand_error,
            backgroundColor: theme.brand_error
        },
        tail_default_l: {
            width: theme.border_width_lg,
            height: 30,
            marginLeft: 11
        },
        icon_l: {
            fontSize: 20
        },
        tail_default_s: {
            width: theme.border_width_lg,
            height: 30,
            marginLeft: 2 * grid
        },
        tail_default_s_h: {
            height: theme.border_width_lg,
            width: 50,
            marginTop: 2 * grid
        },
        tail_gray: {
            backgroundColor: theme.color_text_placeholder
        },
        tail_blue: {
            backgroundColor: theme.brand_primary
        },
        tail_error: {
            backgroundColor: theme.brand_error
        },
        tail_last: {
            backgroundColor: 'transparent'
        },
        content_s: {
            paddingLeft: theme.h_spacing_md
        },
        content_s_h: {
            paddingTop: theme.v_spacing_md
        },
        content_l: {
            paddingLeft: theme.h_spacing_lg
        },
        title_s: {
            fontWeight: 'bold',
            fontSize: theme.font_size_caption,
            paddingBottom: theme.v_spacing_md,
            color: theme.color_text_base
        },
        description_s: {
            fontSize: theme.font_size_caption_sm,
            color: theme.color_text_base
        },
        title_l: {
            fontWeight: 'bold',
            fontSize: theme.font_size_heading,
            paddingBottom: theme.v_spacing_md,
            color: theme.color_text_base
        },
        description_l: {
            fontSize: theme.font_size_subhead,
            color: theme.color_text_base
        }
    });
});