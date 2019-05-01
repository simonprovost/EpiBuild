import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface InputItemStyle {
    container: ViewStyle;
    text: TextStyle;
    input: TextStyle;
    inputDisabled: TextStyle;
    inputErrorColor: TextStyle;
    clear: ViewStyle;
    extra: TextStyle;
    errorIcon: ViewStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    text: import("react-native").RegisteredStyle<TextStyle>;
    input: import("react-native").RegisteredStyle<TextStyle>;
    inputDisabled: import("react-native").RegisteredStyle<TextStyle>;
    inputErrorColor: import("react-native").RegisteredStyle<TextStyle>;
    clear: import("react-native").RegisteredStyle<ViewStyle>;
    extra: import("react-native").RegisteredStyle<TextStyle>;
    errorIcon: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
