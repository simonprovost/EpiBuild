import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { WithThemeStyles } from '../style';
import StepsItem from './StepsItem';
import { StepsStyle } from './style/index';
export interface StepsProps extends WithThemeStyles<StepsStyle> {
    direction?: 'vertical' | 'horizontal';
    size?: string;
    finishIcon?: string;
    children: React.ReactElement<any>[];
    current?: number;
}
export default class Steps extends React.Component<StepsProps, any> {
    static Step: typeof StepsItem;
    static defaultProps: {
        direction: string;
    };
    constructor(props: StepsProps);
    onLayout: (e: LayoutChangeEvent) => void;
    render(): JSX.Element;
}
