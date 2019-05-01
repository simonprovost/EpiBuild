import { TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../../style';
export interface StepperStyle {
    container: ViewStyle;
    input: TextStyle;
    stepWrap: ViewStyle;
    stepText: TextStyle;
    stepDisabled: ViewStyle;
    disabledStepTextColor: TextStyle;
    highlightStepTextColor: TextStyle;
    highlightStepBorderColor: ViewStyle;
}
declare const _default: (theme: Theme) => {
    container: import("react-native").RegisteredStyle<ViewStyle>;
    input: import("react-native").RegisteredStyle<TextStyle>;
    stepWrap: import("react-native").RegisteredStyle<ViewStyle>;
    stepText: import("react-native").RegisteredStyle<TextStyle>;
    stepDisabled: import("react-native").RegisteredStyle<ViewStyle>;
    disabledStepTextColor: import("react-native").RegisteredStyle<TextStyle>;
    highlightStepTextColor: import("react-native").RegisteredStyle<TextStyle>;
    highlightStepBorderColor: import("react-native").RegisteredStyle<ViewStyle>;
};
export default _default;
