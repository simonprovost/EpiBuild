import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface RadioStyle {
    wrapper: ViewStyle;
    icon: ImageStyle;
    radioItem: ViewStyle;
    radioItemRadio: ViewStyle;
    radioItemContent: TextStyle;
    radioItemContentDisable: TextStyle;
}
declare const _default: (theme: Theme) => {
    wrapper: import("react-native").RegisteredStyle<ViewStyle>;
    icon: import("react-native").RegisteredStyle<ImageStyle>;
    radioItem: import("react-native").RegisteredStyle<ViewStyle>;
    radioItemRadio: import("react-native").RegisteredStyle<ViewStyle>;
    radioItemContent: import("react-native").RegisteredStyle<TextStyle>;
    radioItemContentDisable: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
