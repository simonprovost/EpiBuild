import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { CardStyle } from './style';
export interface CardBodyProps extends WithThemeStyles<Pick<CardStyle, 'body'>> {
    style?: StyleProp<ViewStyle>;
}
export default class CardBody extends React.Component<CardBodyProps, any> {
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
