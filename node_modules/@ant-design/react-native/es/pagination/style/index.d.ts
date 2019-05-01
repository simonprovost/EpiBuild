import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface PaginationStyle {
    container: ViewStyle;
    numberStyle: ViewStyle;
    totalStyle: TextStyle;
    activeTextStyle: TextStyle;
    indicatorStyle: ViewStyle;
    pointStyle: ViewStyle;
    pointActiveStyle: ViewStyle;
    spaceStyle: ViewStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    numberStyle: import("react-native").RegisteredStyle<ViewStyle>;
    totalStyle: import("react-native").RegisteredStyle<TextStyle>;
    activeTextStyle: import("react-native").RegisteredStyle<TextStyle>;
    indicatorStyle: import("react-native").RegisteredStyle<ViewStyle>;
    pointStyle: import("react-native").RegisteredStyle<ViewStyle>;
    pointActiveStyle: import("react-native").RegisteredStyle<ViewStyle>;
    spaceStyle: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
