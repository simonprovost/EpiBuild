import { TextStyle, ViewStyle } from 'react-native';
export interface PickerStyle {
    modal: ViewStyle;
    header: ViewStyle;
    headerItem: ViewStyle;
    actionText: TextStyle;
    title: TextStyle;
    okText: TextStyle;
    dismissText: TextStyle;
}
declare const _default: () => {
    modal: import("react-native").RegisteredStyle<ViewStyle>;
    header: import("react-native").RegisteredStyle<ViewStyle>;
    headerItem: import("react-native").RegisteredStyle<ViewStyle>;
    actionText: import("react-native").RegisteredStyle<TextStyle>;
    title: import("react-native").RegisteredStyle<TextStyle>;
    okText: import("react-native").RegisteredStyle<TextStyle>;
    dismissText: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
