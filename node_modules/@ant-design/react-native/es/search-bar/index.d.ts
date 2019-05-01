import PropTypes from 'prop-types';
import React from 'react';
import { StyleProp, TextInput, TextStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { SearchBarPropsType, SearchBarState } from './PropsType';
import { SearchBarStyle } from './style/index';
export interface SearchBarProps extends SearchBarPropsType, WithThemeStyles<SearchBarStyle> {
    onChangeText?: (text: string) => void;
    onSubmitEditing?: (event: {
        nativeEvent: {
            text: string;
        };
    }) => void;
    style?: StyleProp<TextStyle>;
}
export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    static defaultProps: {
        placeholder: string;
        onSubmit: () => void;
        onChange: () => void;
        onFocus: () => void;
        onBlur: () => void;
        onClear: () => void;
        showCancelButton: boolean;
        disabled: boolean;
    };
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    inputRef: TextInput | null;
    constructor(props: SearchBarProps);
    componentWillReceiveProps(nextProps: SearchBarProps): void;
    onSubmit: (_: {
        nativeEvent: {
            text: string;
        };
    }) => void;
    onChangeText: (value: string) => void;
    onCancel: () => void;
    onFocus: () => void;
    onBlur: () => void;
    render(): JSX.Element;
}
