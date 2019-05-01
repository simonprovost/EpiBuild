import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { CheckboxPropsType } from './PropsType';
import { CheckboxStyle } from './style/index';
export interface CheckboxProps extends CheckboxPropsType, WithThemeStyles<CheckboxStyle> {
    style?: StyleProp<TextStyle>;
}
export default class Checkbox extends React.Component<CheckboxProps, any> {
    static CheckboxItem: any;
    static AgreeItem: any;
    constructor(props: CheckboxProps, context: any);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
