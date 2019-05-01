import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { RadioPropsType } from './PropsType';
import { RadioStyle } from './style/index';
export interface RadioNativeProps extends RadioPropsType, WithThemeStyles<RadioStyle> {
    style?: StyleProp<TextStyle>;
}
export default class Radio extends React.Component<RadioNativeProps, any> {
    static RadioItem: any;
    constructor(props: RadioNativeProps, context: any);
    componentWillReceiveProps(nextProps: RadioNativeProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
