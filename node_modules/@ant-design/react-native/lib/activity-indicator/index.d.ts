import React from 'react';
import { WithThemeStyles } from '../style';
import { ActivityIndicatorStyle } from './style/index';
export interface ActivityIndicatorNativeProps extends WithThemeStyles<ActivityIndicatorStyle> {
    styles?: ActivityIndicatorStyle;
    color?: string;
    animating?: boolean;
    toast?: boolean;
    size?: 'large' | 'small';
    text?: string;
}
export default class RNActivityIndicator extends React.Component<ActivityIndicatorNativeProps, any> {
    static defaultProps: {
        animating: boolean;
        color: string;
        size: string;
        toast: boolean;
    };
    _renderToast(): JSX.Element;
    _renderSpinner(): JSX.Element;
    render(): JSX.Element | null;
}
