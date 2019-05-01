import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface ToastStyle {
    container: ViewStyle;
    innerContainer: ViewStyle;
    innerWrap: ViewStyle;
    iconToast: ViewStyle;
    textToast: ViewStyle;
    content: TextStyle;
    image: TextStyle;
    centering: ViewStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    innerContainer: import("react-native").RegisteredStyle<ViewStyle>;
    innerWrap: import("react-native").RegisteredStyle<ViewStyle>;
    iconToast: import("react-native").RegisteredStyle<ViewStyle>;
    textToast: import("react-native").RegisteredStyle<ViewStyle>;
    content: import("react-native").RegisteredStyle<TextStyle>;
    image: import("react-native").RegisteredStyle<TextStyle>;
    centering: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
