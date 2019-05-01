import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface NoticeBarStyle {
    notice: ViewStyle;
    container: ViewStyle;
    content: TextStyle;
    left6: ViewStyle;
    left15: ViewStyle;
    actionWrap: ViewStyle;
    close: TextStyle;
    link: TextStyle;
}
declare const _default: (variables: Theme) => {
    notice: import("react-native").RegisteredStyle<ViewStyle>;
    container: import("react-native").RegisteredStyle<ViewStyle>;
    content: import("react-native").RegisteredStyle<TextStyle>;
    left6: import("react-native").RegisteredStyle<ViewStyle>;
    left15: import("react-native").RegisteredStyle<ViewStyle>;
    actionWrap: import("react-native").RegisteredStyle<ViewStyle>;
    close: import("react-native").RegisteredStyle<TextStyle>;
    link: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
