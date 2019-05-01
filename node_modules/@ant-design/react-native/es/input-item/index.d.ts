import React from 'react';
import { GestureResponderEvent, TextInputProperties } from 'react-native';
import { Omit } from 'utility-types';
import { WithThemeStyles } from '../style';
import Input from './Input';
import { InputItemPropsType } from './PropsType';
import { InputItemStyle } from './style/index';
/**
 * React Native TextInput Props except these props
 */
export declare type TextInputProps = Omit<TextInputProperties, 'onChange' | 'onFocus' | 'onBlur'>;
export interface InputItemProps extends InputItemPropsType, TextInputProps, WithThemeStyles<InputItemStyle> {
    last?: boolean;
    onExtraClick?: (event: GestureResponderEvent) => void;
    onErrorClick?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
}
interface InputItemState {
    focus: boolean;
}
export default class InputItem extends React.Component<InputItemProps, InputItemState> {
    static defaultProps: {
        type: string;
        editable: boolean;
        clear: boolean;
        onChange: () => void;
        onBlur: () => void;
        onFocus: () => void;
        extra: string;
        onExtraClick: () => void;
        error: boolean;
        onErrorClick: () => void;
        labelNumber: number;
        labelPosition: string;
        textAlign: string;
        last: boolean;
    };
    state: InputItemState;
    inputRef: Input | null;
    onChange: (text: string) => void;
    onInputBlur: () => void;
    onInputFocus: () => void;
    onInputClear: () => void;
    focus: () => void;
    render(): JSX.Element;
}
export {};
