import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { CarouselProps } from '../carousel/index';
import { WithThemeStyles } from '../style';
import { GridPropsType } from './PropsType';
import { GridStyle } from './style/index';
export interface GridProps extends GridPropsType, WithThemeStyles<GridStyle> {
    itemStyle?: StyleProp<ViewStyle>;
    carouselProps?: CarouselProps;
}
export default class Grid extends React.Component<GridProps, any> {
    static defaultProps: GridProps;
    getFlexItemStyle(columnNum: number): {
        height: number;
        borderRightWidth: number;
    };
    render(): JSX.Element;
}
