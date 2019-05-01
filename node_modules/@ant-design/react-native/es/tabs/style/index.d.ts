import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface TabBarStyle {
    container: ViewStyle;
    tabs: ViewStyle;
    tab: ViewStyle;
    underline: ViewStyle;
    textStyle: TextStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    tabs: import("react-native").RegisteredStyle<ViewStyle>;
    tab: import("react-native").RegisteredStyle<ViewStyle>;
    underline: import("react-native").RegisteredStyle<ViewStyle>;
    textStyle: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
