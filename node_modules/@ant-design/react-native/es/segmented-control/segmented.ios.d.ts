import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SegmentedControlPropsType } from './PropsType';
export interface SegmentedControlProps extends SegmentedControlPropsType {
    style?: StyleProp<ViewStyle>;
}
export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
    static defaultProps: {
        selectedIndex: number;
    };
    render(): JSX.Element;
}
