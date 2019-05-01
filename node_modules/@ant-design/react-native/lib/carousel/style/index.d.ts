import { ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface CarouselStyle {
    pagination: ViewStyle;
    paginationX: ViewStyle;
    paginationY: ViewStyle;
    pointStyle: ViewStyle;
    pointActiveStyle: ViewStyle;
    spaceStyle: ViewStyle;
}
declare const _default: (theme: Theme) => {
    pagination: import("react-native").RegisteredStyle<ViewStyle>;
    paginationX: import("react-native").RegisteredStyle<ViewStyle>;
    paginationY: import("react-native").RegisteredStyle<ViewStyle>;
    pointStyle: import("react-native").RegisteredStyle<ViewStyle>;
    pointActiveStyle: import("react-native").RegisteredStyle<ViewStyle>;
    spaceStyle: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
