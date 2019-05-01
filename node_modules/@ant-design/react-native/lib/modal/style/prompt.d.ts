import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface PromptStyle {
    message: TextStyle;
    inputGroup: ViewStyle;
    inputWrapper: ViewStyle;
    input: TextStyle;
    inputFirst: ViewStyle;
    inputLast: ViewStyle;
}
declare const _default: (variables: Theme) => {
    message: import("react-native").RegisteredStyle<TextStyle>;
    inputGroup: import("react-native").RegisteredStyle<ViewStyle>;
    inputWrapper: import("react-native").RegisteredStyle<ViewStyle>;
    input: import("react-native").RegisteredStyle<TextStyle>;
    inputFirst: import("react-native").RegisteredStyle<ViewStyle>;
    inputLast: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
