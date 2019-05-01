import * as React from 'react';
import { ConfigConsumerProps } from '../config-provider';
import { Settings } from 'react-slick';
export declare type CarouselEffect = 'scrollx' | 'fade';
export interface CarouselProps extends Settings {
    effect?: CarouselEffect;
    style?: React.CSSProperties;
    prefixCls?: string;
    slickGoTo?: number;
}
export default class Carousel extends React.Component<CarouselProps, {}> {
    static defaultProps: {
        dots: boolean;
        arrows: boolean;
        draggable: boolean;
    };
    innerSlider: any;
    private slick;
    constructor(props: CarouselProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onWindowResized: () => void;
    saveSlick: (node: any) => void;
    next(): void;
    prev(): void;
    goTo(slide: number, dontAnimate?: boolean): void;
    renderCarousel: ({ getPrefixCls }: ConfigConsumerProps) => JSX.Element;
    render(): JSX.Element;
}
