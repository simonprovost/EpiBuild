import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface SegmentControlStyle {
    segment: ViewStyle;
    item: ViewStyle;
    itemLeftRadius: ViewStyle;
    itemRightRadius: ViewStyle;
    itemText: TextStyle;
}
declare const _default: (theme: Theme) => {
    segment: import("react-native").RegisteredStyle<ViewStyle>;
    item: import("react-native").RegisteredStyle<ViewStyle>;
    itemLeftRadius: import("react-native").RegisteredStyle<ViewStyle>;
    itemRightRadius: import("react-native").RegisteredStyle<ViewStyle>;
    itemText: import("react-native").RegisteredStyle<TextStyle>;
};
export default _default;
