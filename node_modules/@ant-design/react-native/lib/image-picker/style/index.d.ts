import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
export interface ImagePickerStyle {
    container: ViewStyle;
    size: ImageStyle;
    item: ViewStyle;
    image: ImageStyle;
    closeWrap: ViewStyle;
    closeText: TextStyle;
    plusWrap: ViewStyle;
    plusWrapNormal: ViewStyle;
    plusWrapHighlight: ViewStyle;
    plusText: TextStyle;
}
declare const _default: () => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    size: import("react-native").RegisteredStyle<ImageStyle>;
    item: import("react-native").RegisteredStyle<ViewStyle>;
    image: import("react-native").RegisteredStyle<ImageStyle>;
    closeWrap: import("react-native").RegisteredStyle<ViewStyle>;
    closeText: import("react-native").RegisteredStyle<TextStyle>;
    plusWrap: import("react-native").RegisteredStyle<ViewStyle>;
    plusWrapNormal: import("react-native").RegisteredStyle<ViewStyle>;
    plusWrapHighlight: import("react-native").RegisteredStyle<ViewStyle>;
    plusText: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
