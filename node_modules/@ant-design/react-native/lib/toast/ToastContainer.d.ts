import React from 'react';
import { Animated } from 'react-native';
import { WithThemeStyles } from '../style';
import { ToastStyle } from './style/index';
export interface ToastProps extends WithThemeStyles<ToastStyle> {
    content: string;
    duration?: number;
    onClose?: () => void;
    mask?: boolean;
    type?: string;
    onAnimationEnd?: () => void;
}
export default class ToastContainer extends React.Component<ToastProps, any> {
    static defaultProps: {
        duration: number;
        mask: boolean;
        onClose(): void;
    };
    anim: Animated.CompositeAnimation | null;
    constructor(props: ToastProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
