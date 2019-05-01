import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { ResultPropsType } from './PropsType';
import { ResultStyle } from './style/index';
export interface ResultNativeProps extends ResultPropsType, WithThemeStyles<ResultStyle> {
    style?: StyleProp<ViewStyle>;
}
export default class Result extends React.Component<ResultNativeProps, any> {
    static defaultProps: {
        buttonType: string;
    };
    render(): JSX.Element;
}
