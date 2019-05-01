import React from 'react';
import { View } from 'react-native';
declare const _default: {
    new (props: Readonly<import("./PopupPickerTypes").PopupPickerProps>): {
        picker: any;
        componentWillReceiveProps(nextProps: {
            value: any;
            visible: any;
        }): void;
        onPickerChange: (pickerValue: any) => void;
        saveRef: (picker: any) => void;
        setVisibleState(visible: any): void;
        fireVisibleChange(visible: boolean): void;
        getRender(): JSX.Element;
        onTriggerClick: (e: any) => void;
        onOk: () => void;
        getContent: () => string | React.ReactElement<any> | undefined;
        onDismiss: () => void;
        hide: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<import("./PopupPickerTypes").PopupPickerProps>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    defaultProps: {
        actionTextUnderlayColor: string;
        actionTextActiveOpacity: number;
        triggerType: string;
        styles: {};
        WrapComponent: View;
        onVisibleChange(_: any): void;
        okText: string;
        dismissText: string;
        title: string;
        onOk(_: any): void;
        onDismiss(): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
