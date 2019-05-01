import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { CardStyle } from './style';
export interface CardHeaderPropsType extends WithThemeStyles<Pick<CardStyle, 'headerContentWrap' | 'headerContent' | 'headerExtraWrap' | 'headerExtra' | 'headerImage' | 'headerTitle' | 'headerWrap'>> {
    title?: React.ReactNode;
    /** need url of img, if this is string. */
    thumb?: React.ReactNode;
    extra?: React.ReactNode;
}
export interface CardHeaderProps extends CardHeaderPropsType {
    style?: StyleProp<ViewStyle>;
    thumbStyle?: StyleProp<ImageStyle>;
}
export default class CardHeader extends React.Component<CardHeaderProps, any> {
    static defaultProps: {
        thumbStyle: {};
        style: {};
    };
    render(): JSX.Element;
}
