import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { TagPropsType } from './PropsType';
import { TagStyle } from './style/index';
export interface TagNativeProps extends TagPropsType, WithThemeStyles<TagStyle> {
    style?: StyleProp<ViewStyle>;
}
export default class Tag extends React.Component<TagNativeProps, any> {
    static defaultProps: {
        disabled: boolean;
        small: boolean;
        selected: boolean;
        closable: boolean;
        onClose(): void;
        afterClose(): void;
        onChange(): void;
        onLongPress(): void;
    };
    closeDom: View | null;
    constructor(props: TagNativeProps);
    componentWillReceiveProps(nextProps: TagNativeProps): void;
    onPress: () => void;
    handleLongPress: () => void;
    onTagClose: () => void;
    onPressIn: (styles: {
        tag: import("react-native").RegisteredStyle<ViewStyle>;
        wrap: import("react-native").RegisteredStyle<ViewStyle>;
        wrapSmall: import("react-native").RegisteredStyle<ViewStyle>;
        text: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        textSmall: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        normalWrap: import("react-native").RegisteredStyle<ViewStyle>;
        normalText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        activeWrap: import("react-native").RegisteredStyle<ViewStyle>;
        activeText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        disabledWrap: import("react-native").RegisteredStyle<ViewStyle>;
        disabledText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        close: import("react-native").RegisteredStyle<ViewStyle>;
        closeIOS: import("react-native").RegisteredStyle<ViewStyle>;
        closeAndroid: import("react-native").RegisteredStyle<ViewStyle>;
        closeText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        closeTransform: import("react-native").RegisteredStyle<ViewStyle>;
    }) => () => void;
    onPressOut: (styles: {
        tag: import("react-native").RegisteredStyle<ViewStyle>;
        wrap: import("react-native").RegisteredStyle<ViewStyle>;
        wrapSmall: import("react-native").RegisteredStyle<ViewStyle>;
        text: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        textSmall: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        normalWrap: import("react-native").RegisteredStyle<ViewStyle>;
        normalText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        activeWrap: import("react-native").RegisteredStyle<ViewStyle>;
        activeText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        disabledWrap: import("react-native").RegisteredStyle<ViewStyle>;
        disabledText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        close: import("react-native").RegisteredStyle<ViewStyle>;
        closeIOS: import("react-native").RegisteredStyle<ViewStyle>;
        closeAndroid: import("react-native").RegisteredStyle<ViewStyle>;
        closeText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        closeTransform: import("react-native").RegisteredStyle<ViewStyle>;
    }) => () => void;
    render(): JSX.Element;
}
