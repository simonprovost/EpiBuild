import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface TagStyle {
    tag: ViewStyle;
    wrap: ViewStyle;
    wrapSmall: ViewStyle;
    text: TextStyle;
    textSmall: TextStyle;
    normalWrap: ViewStyle;
    normalText: TextStyle;
    activeWrap: ViewStyle;
    activeText: TextStyle;
    disabledWrap: ViewStyle;
    disabledText: TextStyle;
    close: ViewStyle;
    closeIOS: ViewStyle;
    closeAndroid: ViewStyle;
    closeText: TextStyle;
    closeTransform: ViewStyle;
}
declare const _default: (theme: Theme) => {
    tag: import("react-native").RegisteredStyle<ViewStyle>;
    wrap: import("react-native").RegisteredStyle<ViewStyle>;
    wrapSmall: import("react-native").RegisteredStyle<ViewStyle>;
    text: import("react-native").RegisteredStyle<TextStyle>;
    textSmall: import("react-native").RegisteredStyle<TextStyle>;
    normalWrap: import("react-native").RegisteredStyle<ViewStyle>;
    normalText: import("react-native").RegisteredStyle<TextStyle>;
    activeWrap: import("react-native").RegisteredStyle<ViewStyle>;
    activeText: import("react-native").RegisteredStyle<TextStyle>;
    disabledWrap: import("react-native").RegisteredStyle<ViewStyle>;
    disabledText: import("react-native").RegisteredStyle<TextStyle>;
    close: import("react-native").RegisteredStyle<ViewStyle>;
    closeIOS: import("react-native").RegisteredStyle<ViewStyle>;
    closeAndroid: import("react-native").RegisteredStyle<ViewStyle>;
    closeText: import("react-native").RegisteredStyle<TextStyle>;
    closeTransform: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
