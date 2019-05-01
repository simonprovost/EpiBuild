import { ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface PopoverStyle {
    content: ViewStyle;
    arrow: ViewStyle;
    background: ViewStyle;
}
declare const _default: (theme: Theme) => {
    content: import("react-native").RegisteredStyle<ViewStyle>;
    arrow: import("react-native").RegisteredStyle<ViewStyle>;
    background: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
