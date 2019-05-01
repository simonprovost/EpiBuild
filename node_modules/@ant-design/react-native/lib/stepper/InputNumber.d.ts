import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import StepperStyles from './style';
declare function noop(): void;
declare function defaultParser(input: string): string;
export interface InputNumberProps {
    style?: StyleProp<ViewStyle>;
    onChange?: (e: any) => void;
    readOnly?: boolean;
    disabled?: boolean;
    onFocus?: (e?: any) => void;
    onBlur?: (e: any, ...rest: any[]) => void;
    max?: number;
    min?: number;
    step?: string | number;
    parser?: (v: any) => void;
    precision?: number;
    value?: number;
    defaultValue?: number;
    autoFocus?: boolean;
    styles: ReturnType<typeof StepperStyles>;
    upStyle?: StyleProp<ViewStyle>;
    downStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    keyboardType?: any;
}
export interface InputNumberState {
    value: number;
    inputValue?: number;
    focused?: boolean;
}
export default class InputNumber<P extends InputNumberProps = InputNumberProps, S extends InputNumberState = InputNumberState> extends React.Component<P, S> {
    static defaultProps: {
        max: number;
        min: number;
        step: number;
        style: {};
        onChange: typeof noop;
        onFocus: typeof noop;
        onBlur: typeof noop;
        parser: typeof defaultParser;
    };
    autoStepTimer: any;
    _stepDown: any;
    _stepDownText: any;
    _stepUp: any;
    _stepUpText: any;
    constructor(props: P);
    componentWillReceiveProps(nextProps: P): void;
    componentWillUnmount(): void;
    onChange: (e: any) => void;
    onFocus: (...args: any[]) => void;
    onBlur: (e: any, ...args: any[]) => void;
    getCurrentValidValue: (value: any) => any;
    getValidValue: (value: any) => any;
    setValue: (v: any, callback?: any) => void;
    getPrecision: (value: any) => number;
    getMaxPrecision: (currentValue: any, ratio?: number) => number;
    getPrecisionFactor: (currentValue: any, ratio?: number) => number;
    toPrecisionAsStep: (num: any) => any;
    isNotCompleteNumber: (num: any) => boolean;
    toNumber: (num: any) => any;
    toNumberWhenUserInput: (num: any) => any;
    stepCompute: (type: "down" | "up", val: any, rat: any) => any;
    step: (type: "down" | "up", e: any, ratio?: number) => boolean;
    stop: () => void;
    action: (type: "down" | "up", e: any, ratio?: any, recursive?: any) => void;
    down: (e: any, ratio?: any, recursive?: any) => void;
    up: (e: any, ratio?: any, recursive?: any) => void;
    onPressIn(type: string): void;
    onPressOut(type: any): void;
    onPressInDown: (e: any) => void;
    onPressOutDown: () => void;
    onPressInUp: (e: any) => void;
    onPressOutUp: () => void;
    getValueFromEvent(e: any): any;
    render(): JSX.Element;
}
export {};
