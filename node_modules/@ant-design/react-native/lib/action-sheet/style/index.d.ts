import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface ActionSheetStyle {
    container: ViewStyle;
    wrap: ViewStyle;
    content: ViewStyle;
    mask: ViewStyle;
    title: ViewStyle;
    titleText: TextStyle;
    message: ViewStyle;
    btn: ViewStyle;
    cancelBtn: ViewStyle;
    cancelBtnMask: ViewStyle;
    destructiveBtn: TextStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    wrap: import("react-native").RegisteredStyle<ViewStyle>;
    content: import("react-native").RegisteredStyle<ViewStyle>;
    mask: import("react-native").RegisteredStyle<ViewStyle>;
    title: import("react-native").RegisteredStyle<ViewStyle>;
    titleText: import("react-native").RegisteredStyle<TextStyle>;
    message: import("react-native").RegisteredStyle<ViewStyle>;
    btn: import("react-native").RegisteredStyle<ViewStyle>;
    cancelBtn: import("react-native").RegisteredStyle<ViewStyle>;
    cancelBtnMask: import("react-native").RegisteredStyle<ViewStyle>;
    destructiveBtn: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
