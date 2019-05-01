import React from 'react';
import MultiPickerProps from './MultiPickerProps';
export interface MultiPickerProp {
    getValue: Function;
}
declare const _default: {
    new (props: Readonly<MultiPickerProps>): {
        getValue: () => any[];
        onChange: (i: any, v: any, cb: any) => void;
        onValueChange: (i: any, v: any) => void;
        onScrollChange: (i: any, v: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<MultiPickerProps>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: MultiPickerProps, context?: any): {
        getValue: () => any[];
        onChange: (i: any, v: any, cb: any) => void;
        onValueChange: (i: any, v: any) => void;
        onScrollChange: (i: any, v: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<MultiPickerProps>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    defaultProps: {
        prefixCls: string;
        onValueChange(): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
