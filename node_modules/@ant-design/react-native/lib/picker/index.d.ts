import PropTypes from 'prop-types';
import React from 'react';
import { WithThemeStyles } from '../style';
import { PickerData, PickerPropsType } from './PropsType';
import { PickerStyle } from './style';
export interface PickerProps extends PickerPropsType, WithThemeStyles<PickerStyle> {
    pickerPrefixCls?: string;
    popupPrefixCls?: string;
}
export declare function getDefaultProps(): {
    triggerType: string;
    prefixCls: string;
    pickerPrefixCls: string;
    popupPrefixCls: string;
    format: (values: string[]) => string;
    cols: number;
    cascade: boolean;
    title: string;
};
export default class Picker extends React.Component<PickerProps, any> {
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        triggerType: string;
        prefixCls: string;
        pickerPrefixCls: string;
        popupPrefixCls: string;
        format: (values: string[]) => string;
        cols: number;
        cascade: boolean;
        title: string;
    };
    protected popupProps: {};
    private scrollValue;
    getSel: () => string | undefined;
    getPickerCol: () => JSX.Element[];
    onOk: (v: any) => void;
    setScrollValue: (v: any) => void;
    setCasecadeScrollValue: (v: any) => void;
    fixOnOk: (cascader: any) => void;
    onPickerChange: (v: any) => void;
    onVisibleChange: (visible: boolean) => void;
    render(): JSX.Element;
    getCascade: (cascade: boolean | undefined, data: PickerData[] | PickerData[][], cols: number | undefined, itemStyle: any, indicatorStyle: any) => {
        cascader: JSX.Element;
        popupMoreProps: {};
    };
}
