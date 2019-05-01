import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { RadioItemPropsType } from './PropsType';
import Radio from './Radio';
import { RadioStyle } from './style/index';
export interface RadioItemNativeProps extends RadioItemPropsType, WithThemeStyles<RadioStyle> {
    style?: StyleProp<ViewStyle>;
    radioStyle?: StyleProp<ImageStyle>;
}
export default class RadioItem extends React.Component<RadioItemNativeProps, any> {
    radio: Radio | null;
    handleClick: () => void;
    render(): JSX.Element;
}
