import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface BadgeStyle {
    wrap: ViewStyle;
    textCornerWrap: ViewStyle;
    dot: ViewStyle;
    dotSizelarge: ViewStyle;
    textDom: ViewStyle;
    textCorner: ViewStyle;
    textCornerlarge: ViewStyle;
    text: TextStyle;
}
declare const _default: (theme: Theme) => {
    wrap: import("react-native").RegisteredStyle<ViewStyle>;
    textCornerWrap: import("react-native").RegisteredStyle<ViewStyle>;
    dot: import("react-native").RegisteredStyle<ViewStyle>;
    dotSizelarge: import("react-native").RegisteredStyle<ViewStyle>;
    textDom: import("react-native").RegisteredStyle<ViewStyle>;
    textCorner: import("react-native").RegisteredStyle<ViewStyle>;
    textCornerlarge: import("react-native").RegisteredStyle<ViewStyle>;
    text: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
