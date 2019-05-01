import React from 'react';
import { PopupPickerProps } from '../../picker/PopupPickerTypes';
import DatePickerProps from './DatePickerProps';
export interface PopupDatePickerProps extends PopupPickerProps {
    datePicker: React.ReactElement<DatePickerProps>;
    onChange?: (date?: any) => void;
    date?: any;
}
declare class PopupDatePicker extends React.Component<PopupDatePickerProps, any> {
    static defaultProps: {
        pickerValueProp: string;
        pickerValueChangeProp: string;
    };
    onOk: (v: any) => void;
    render(): JSX.Element;
}
export default PopupDatePicker;
