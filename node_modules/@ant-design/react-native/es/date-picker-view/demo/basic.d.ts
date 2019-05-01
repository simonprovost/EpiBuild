import React from 'react';
export default class DatePickerViewExample extends React.Component {
    state: {
        value: undefined;
        value12hours: undefined;
    };
    onChange: (value: any) => void;
    onValueChange: (...args: any[]) => void;
    render(): JSX.Element;
}
