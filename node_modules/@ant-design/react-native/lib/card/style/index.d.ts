import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface CardStyle {
    card: ViewStyle;
    full: ViewStyle;
    headerWrap: ViewStyle;
    headerTitle: ViewStyle;
    headerImage: ImageStyle;
    headerContentWrap: ViewStyle;
    headerContent: TextStyle;
    headerExtraWrap: ViewStyle;
    headerExtra: TextStyle;
    body: ViewStyle;
    footerWrap: ViewStyle;
    footerContent: TextStyle;
    footerExtra: TextStyle;
}
declare const _default: (theme: Theme) => {
    card: import("react-native").RegisteredStyle<ViewStyle>;
    full: import("react-native").RegisteredStyle<ViewStyle>;
    headerWrap: import("react-native").RegisteredStyle<ViewStyle>;
    headerTitle: import("react-native").RegisteredStyle<ViewStyle>;
    headerImage: import("react-native").RegisteredStyle<ImageStyle>;
    headerContentWrap: import("react-native").RegisteredStyle<ViewStyle>;
    headerContent: import("react-native").RegisteredStyle<TextStyle>;
    headerExtraWrap: import("react-native").RegisteredStyle<ViewStyle>;
    headerExtra: import("react-native").RegisteredStyle<TextStyle>;
    body: import("react-native").RegisteredStyle<ViewStyle>;
    footerWrap: import("react-native").RegisteredStyle<ViewStyle>;
    footerContent: import("react-native").RegisteredStyle<TextStyle>;
    footerExtra: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
