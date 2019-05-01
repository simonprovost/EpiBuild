import PropTypes from 'prop-types';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { PaginationPropsType, PaginationState } from './PropsType';
import { PaginationStyle } from './style/index';
export interface PaginationNativeProps extends PaginationPropsType, WithThemeStyles<PaginationStyle> {
    style?: StyleProp<ViewStyle>;
    indicatorStyle?: StyleProp<ViewStyle>;
    locale?: {
        prevText: string;
        nextText: string;
    };
}
export default class Pagination extends React.Component<PaginationNativeProps, PaginationState> {
    static defaultProps: {
        mode: string;
        current: number;
        total: number;
        simple: boolean;
        onChange: () => void;
        indicatorStyle: null;
    };
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    constructor(props: PaginationNativeProps);
    componentWillReceiveProps(nextProps: PaginationNativeProps): void;
    onChange(p: number): void;
    render(): JSX.Element;
}
