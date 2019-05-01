import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface TabBarStyle {
    tabbar: ViewStyle;
    content: ViewStyle;
    tabs: ViewStyle;
    barItem: ViewStyle;
    barIcon: ImageStyle;
    barItemSelected: ViewStyle;
    barItemTitle: TextStyle;
    contentItem: ViewStyle;
    contentItemSelected: ViewStyle;
    badge: ViewStyle;
    badgeText: TextStyle;
}
declare const _default: (theme: Theme) => {
    tabbar: import("react-native").RegisteredStyle<ViewStyle>;
    content: import("react-native").RegisteredStyle<ViewStyle>;
    tabs: import("react-native").RegisteredStyle<ViewStyle>;
    barItem: import("react-native").RegisteredStyle<ViewStyle>;
    barIcon: import("react-native").RegisteredStyle<ImageStyle>;
    barItemSelected: import("react-native").RegisteredStyle<ViewStyle>;
    barItemTitle: import("react-native").RegisteredStyle<TextStyle>;
    contentItem: import("react-native").RegisteredStyle<ViewStyle>;
    contentItemSelected: import("react-native").RegisteredStyle<ViewStyle>;
    badge: import("react-native").RegisteredStyle<ViewStyle>;
    badgeText: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
