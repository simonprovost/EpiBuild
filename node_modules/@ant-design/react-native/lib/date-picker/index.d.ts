import PropTypes from 'prop-types';
import React from 'react';
import { PickerStyle } from '../picker/style/index';
import { WithThemeStyles } from '../style';
import { DatePickerPropsType } from './PropsType';
export interface DatePickerProps extends DatePickerPropsType, WithThemeStyles<PickerStyle> {
    triggerTypes?: string;
}
export default class DatePicker extends React.Component<DatePickerProps> {
    static defaultProps: {
        mode: string;
        triggerType: string;
        minuteStep: number;
    };
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    render(): JSX.Element;
}
