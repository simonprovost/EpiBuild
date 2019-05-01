import React from 'react';
import { View } from 'react-native';
import { PopupPickerProps } from './PopupPickerTypes';
export default function PopupMixin(getModal: (props: any, visible: any, { getContent, hide, onDismiss, onOk }: any) => JSX.Element, platformProps: {
    actionTextUnderlayColor: string;
    actionTextActiveOpacity: number;
    triggerType: string;
    styles: {};
    WrapComponent: View;
}): {
    new (props: Readonly<PopupPickerProps>): {
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
        }> & Readonly<PopupPickerProps>;
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
