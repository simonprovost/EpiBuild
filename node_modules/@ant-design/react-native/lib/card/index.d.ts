import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import { CardStyle } from './style/index';
export interface CardNativeProps extends WithThemeStyles<CardStyle> {
    style?: StyleProp<ViewStyle>;
    full?: boolean;
}
export default class Card extends React.Component<CardNativeProps, any> {
    static defaultProps: {
        style: {};
        full: boolean;
    };
    static Header: typeof CardHeader;
    static Body: typeof CardBody;
    static Footer: typeof CardFooter;
    render(): JSX.Element;
}
