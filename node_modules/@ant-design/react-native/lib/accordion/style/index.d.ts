import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface AccordionStyle {
    container: ViewStyle;
    header: ViewStyle;
    arrow: TextStyle;
    headerWrap: ViewStyle;
    headerText: TextStyle;
    content: ViewStyle;
    contentText: TextStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    header: import("react-native").RegisteredStyle<ViewStyle>;
    arrow: import("react-native").RegisteredStyle<TextStyle>;
    headerWrap: import("react-native").RegisteredStyle<ViewStyle>;
    headerText: import("react-native").RegisteredStyle<TextStyle>;
    content: import("react-native").RegisteredStyle<ViewStyle>;
    contentText: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
