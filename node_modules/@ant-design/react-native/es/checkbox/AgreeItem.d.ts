import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import Checkbox from './Checkbox';
import { CheckboxPropsType } from './PropsType';
import { CheckboxStyle } from './style/index';
export interface AgreeItemProps extends CheckboxPropsType, WithThemeStyles<CheckboxStyle> {
    checkboxStyle?: StyleProp<ImageStyle>;
    style?: StyleProp<ViewStyle>;
}
export default class AgreeItem extends React.Component<AgreeItemProps, any> {
    checkbox: Checkbox | null;
    handleClick: () => void;
    render(): JSX.Element;
}
