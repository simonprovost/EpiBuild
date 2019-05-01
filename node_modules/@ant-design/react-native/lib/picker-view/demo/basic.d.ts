import React from 'react';
export default class PickerViewExample extends React.Component {
    state: {
        value: undefined;
    };
    onChange: (value: any) => void;
    render(): JSX.Element;
}
