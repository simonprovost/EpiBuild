import React from 'react';
import { PopupPickerProps } from '../PopupPickerTypes';
import { CascaderProps, CascaderValue } from './CascaderTypes';
export interface IPopupCascaderProps extends PopupPickerProps {
    cascader: React.ReactElement<CascaderProps>;
    onChange?: (date?: CascaderValue) => void;
}
declare class PopupCascader extends React.Component<IPopupCascaderProps, any> {
    static defaultProps: {
        pickerValueProp: string;
        pickerValueChangeProp: string;
    };
    onOk: (v: any) => void;
    render(): JSX.Element;
}
export default PopupCascader;
