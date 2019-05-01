import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { PickerData } from '../picker/PropsType';
export interface PickerViewProps {
    cols?: number;
    cascade?: boolean;
    value?: any[];
    data?: PickerData[] | PickerData[][];
    styles?: any;
    onChange?: (value?: any) => void;
    onScrollChange?: (value?: any) => void;
    indicatorStyle?: StyleProp<ViewStyle>;
    itemStyle?: StyleProp<ViewStyle>;
}
export default class PickerView extends React.Component<PickerViewProps, any> {
    static defaultProps: {
        cols: number;
        cascade: boolean;
        value: never[];
        onChange(): void;
    };
    getCol: () => JSX.Element[];
    render(): JSX.Element;
}
