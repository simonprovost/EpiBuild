import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { CardStyle } from './style';
export interface CardFooterPropsType {
    content?: React.ReactNode;
    extra?: React.ReactNode;
}
export interface CardFooterProps extends CardFooterPropsType, WithThemeStyles<Pick<CardStyle, 'footerContent' | 'footerExtra' | 'footerWrap'>> {
    style?: StyleProp<ViewStyle>;
}
export default class CardFooter extends React.Component<CardFooterProps, any> {
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
