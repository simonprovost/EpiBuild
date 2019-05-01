import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface ResultStyle {
    result: ViewStyle;
    imgWrap: ViewStyle;
    img: ImageStyle;
    title: ViewStyle;
    titleText: TextStyle;
    message: ViewStyle;
    messageText: TextStyle;
    buttonWrap: ViewStyle;
    button: ViewStyle;
}
declare const _default: (theme: Theme) => {
    result: import("react-native").RegisteredStyle<ViewStyle>;
    imgWrap: import("react-native").RegisteredStyle<ViewStyle>;
    img: import("react-native").RegisteredStyle<ImageStyle>;
    title: import("react-native").RegisteredStyle<ViewStyle>;
    titleText: import("react-native").RegisteredStyle<TextStyle>;
    message: import("react-native").RegisteredStyle<ViewStyle>;
    messageText: import("react-native").RegisteredStyle<TextStyle>;
    buttonWrap: import("react-native").RegisteredStyle<ViewStyle>;
    button: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
