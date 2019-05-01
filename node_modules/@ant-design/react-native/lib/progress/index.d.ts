import React from 'react';
import { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { ProgressStyle } from './style/index';
export interface ProgressProps extends WithThemeStyles<ProgressStyle> {
    wrapWidth?: number;
    style?: StyleProp<ViewStyle>;
    barStyle?: StyleProp<ViewStyle>;
    percent?: number;
    position?: 'fixed' | 'normal';
    unfilled?: boolean;
    appearTransition?: boolean;
}
export default class Progress extends React.Component<ProgressProps, any> {
    static defaultProps: {
        percent: number;
        position: string;
        unfilled: boolean;
        appearTransition: boolean;
    };
    constructor(props: ProgressProps);
    componentWillReceiveProps(nextProps: ProgressProps): void;
    componentDidMount(): void;
    onLayout: (e: LayoutChangeEvent) => void;
    normalPercent: (percent?: number | undefined) => any;
    getWidth: (percent?: number | undefined) => number;
    render(): JSX.Element;
}
