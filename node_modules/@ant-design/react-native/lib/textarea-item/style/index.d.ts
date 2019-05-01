import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface TextareaItemStyle {
    container: ViewStyle;
    input: TextStyle;
    icon: ViewStyle;
    errorIcon: ViewStyle;
    count: ViewStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    input: import("react-native").RegisteredStyle<TextStyle>;
    icon: import("react-native").RegisteredStyle<ViewStyle>;
    errorIcon: import("react-native").RegisteredStyle<ViewStyle>;
    count: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
