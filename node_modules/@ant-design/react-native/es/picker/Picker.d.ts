import React from 'react';
import { PickerProps } from './PickerTypes';
declare class Picker extends React.Component<PickerProps, {}> {
    static defaultProps: {
        children: never[];
    };
    static Item: any;
    getValue(): any;
    shouldComponentUpdate(nextProps: any): boolean;
    render(): JSX.Element;
}
export default Picker;
