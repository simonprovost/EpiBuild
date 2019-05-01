import React from 'react';
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, TextInputProperties } from 'react-native';
import { Omit } from 'utility-types';
import { Theme, WithThemeStyles } from '../style';
import { TextAreaItemPropsType } from './PropsType';
import { TextareaItemStyle } from './style/index';
export declare type TextInputProps = Omit<TextInputProperties, 'onChange' | 'onFocus' | 'onBlur'>;
export interface TextareaItemProps extends TextAreaItemPropsType, TextInputProps, WithThemeStyles<TextareaItemStyle> {
    last?: boolean;
    onContentSizeChange?: (e: any) => void;
}
export default class TextAreaItem extends React.Component<TextareaItemProps, any> {
    static defaultProps: {
        onChange(): void;
        onFocus(): void;
        onBlur(): void;
        onErrorClick(): void;
        clear: boolean;
        error: boolean;
        editable: boolean;
        rows: number;
        count: number;
        keyboardType: string;
        autoHeight: boolean;
        last: boolean;
    };
    textAreaRef: TextInput | null;
    constructor(props: TextareaItemProps);
    onChange: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void;
    onContentSizeChange: (theme: Theme) => (event: {
        nativeEvent: {
            contentSize: {
                width: number;
                height: number;
            };
        };
    }) => void;
    getHeight: (theme: Theme) => any;
    render(): JSX.Element;
}
