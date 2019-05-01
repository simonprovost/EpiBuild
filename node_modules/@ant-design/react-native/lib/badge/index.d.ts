import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { BadgeStyle } from './style/index';
export interface BadgeProps extends WithThemeStyles<BadgeStyle> {
    style?: StyleProp<ViewStyle>;
    size?: 'large' | 'small';
    overflowCount?: number;
    corner?: boolean;
    dot?: boolean;
    text?: any;
}
export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        size: string;
        overflowCount: number;
        dot: boolean;
        corner: boolean;
    };
    render(): JSX.Element;
}
