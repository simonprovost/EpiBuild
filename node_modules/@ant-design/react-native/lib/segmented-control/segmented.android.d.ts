import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { SegmentedControlPropsType } from './PropsType';
import { SegmentControlStyle } from './style/index';
export interface SegmentControlProps extends SegmentedControlPropsType, WithThemeStyles<SegmentControlStyle> {
    style?: StyleProp<ViewStyle>;
}
export default class SegmentedControl extends React.Component<SegmentControlProps, any> {
    static defaultProps: {
        selectedIndex: number;
        disabled: boolean;
        values: never[];
        onChange(): void;
        onValueChange(): void;
        style: {};
    };
    constructor(props: SegmentControlProps);
    componentWillReceiveProps(nextProps: SegmentControlProps): void;
    onPress(e: any, index: number, value: string): void;
    render(): JSX.Element;
}
