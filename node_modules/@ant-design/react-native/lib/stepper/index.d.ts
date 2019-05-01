import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { StepPropsType } from './PropsType';
import { StepperStyle } from './style';
export interface StepProps extends StepPropsType, WithThemeStyles<StepperStyle> {
    style?: StyleProp<ViewStyle>;
}
export default class Stepper extends React.Component<StepProps, any> {
    static defaultProps: StepProps;
    render(): JSX.Element;
}
