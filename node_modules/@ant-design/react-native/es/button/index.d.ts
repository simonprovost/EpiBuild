import React from 'react';
import { StyleProp, TouchableHighlightProperties, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { ButtonPropsType } from './PropsType';
import { ButtonStyles } from './style/index';
export interface ButtonProps extends ButtonPropsType, WithThemeStyles<ButtonStyles>, TouchableHighlightProperties {
    activeStyle?: StyleProp<ViewStyle>;
    onPress?: (_?: any) => void;
}
export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        pressIn: boolean;
        disabled: boolean;
        loading: boolean;
        onPress: (_?: any) => void;
        onPressIn: (_?: any) => void;
        onPressOut: (_?: any) => void;
        onShowUnderlay: (_?: any) => void;
        onHideUnderlay: (_?: any) => void;
    };
    constructor(props: ButtonProps);
    onPressIn: (...arg: any[]) => void;
    onPressOut: (...arg: any[]) => void;
    onShowUnderlay: (...arg: any[]) => void;
    onHideUnderlay: (...arg: any[]) => void;
    render(): JSX.Element;
}
