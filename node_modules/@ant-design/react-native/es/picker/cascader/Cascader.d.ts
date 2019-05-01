import React from 'react';
import { CascaderProps } from './CascaderTypes';
declare class Cascader extends React.Component<CascaderProps, any> {
    static defaultProps: {
        cols: number;
        data: never[];
        disabled: boolean;
    };
    state: {
        value: any[];
    };
    componentWillReceiveProps(nextProps: {
        data: any;
        value: any;
    }): void;
    onValueChange: (value: any, index: any) => void;
    getValue(d: any, val: any): any[];
    getCols(): JSX.Element[];
    render(): JSX.Element;
}
export default Cascader;
