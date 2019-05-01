import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface ActivityIndicatorStyle {
    container: ViewStyle;
    innerContainer: ViewStyle;
    wrapper: ViewStyle;
    tip: TextStyle;
    toast: TextStyle;
    spinner: ViewStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    innerContainer: import("react-native").RegisteredStyle<ViewStyle>;
    wrapper: import("react-native").RegisteredStyle<ViewStyle>;
    tip: import("react-native").RegisteredStyle<TextStyle>;
    toast: import("react-native").RegisteredStyle<TextStyle>;
    spinner: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
