import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface GridStyle {
    grayBorderBox: ViewStyle;
    icon: ImageStyle;
    text: TextStyle;
}
declare const _default: (theme: Theme) => {
    grayBorderBox: import("react-native").RegisteredStyle<ViewStyle>;
    icon: import("react-native").RegisteredStyle<ImageStyle>;
    text: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
