import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface SearchBarStyle {
    input: TextStyle;
    inputWrapper: ViewStyle;
    wrapper: ViewStyle;
    cancelTextContainer: ViewStyle;
    cancelText: TextStyle;
    search: TextStyle;
}
declare const _default: (theme: Theme) => {
    input: import("react-native").RegisteredStyle<TextStyle>;
    inputWrapper: import("react-native").RegisteredStyle<ViewStyle>;
    wrapper: import("react-native").RegisteredStyle<ViewStyle>;
    cancelTextContainer: import("react-native").RegisteredStyle<ViewStyle>;
    cancelText: import("react-native").RegisteredStyle<TextStyle>;
    search: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
