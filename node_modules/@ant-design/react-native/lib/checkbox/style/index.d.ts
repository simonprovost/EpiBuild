import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface CheckboxStyle {
    wrapper: ViewStyle;
    icon: TextStyle;
    iconRight: TextStyle;
    agreeItem: ViewStyle;
    agreeItemCheckbox: TextStyle;
    checkboxItemCheckbox: TextStyle;
}
declare const _default: (theme: Theme) => {
    wrapper: import("react-native").RegisteredStyle<ViewStyle>;
    icon: import("react-native").RegisteredStyle<TextStyle>;
    iconRight: import("react-native").RegisteredStyle<TextStyle>;
    agreeItem: import("react-native").RegisteredStyle<ViewStyle>;
    agreeItemCheckbox: import("react-native").RegisteredStyle<TextStyle>;
    checkboxItemCheckbox: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
