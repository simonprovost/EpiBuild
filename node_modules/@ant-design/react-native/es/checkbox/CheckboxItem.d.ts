import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import Checkbox from './Checkbox';
import { CheckboxItemPropsType } from './PropsType';
import { CheckboxStyle } from './style/index';
export interface CheckboxItemProps extends CheckboxItemPropsType, WithThemeStyles<CheckboxStyle> {
    checkboxStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
}
export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
    checkbox: Checkbox | null;
    handleClick: () => void;
    render(): JSX.Element;
}
