import React from 'react';
import { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import CarouselStyles, { CarouselStyle } from './style/index';
export interface CarouselPropsType extends WithThemeStyles<CarouselStyle> {
    selectedIndex?: number;
    dots?: boolean;
    vertical?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    infinite?: boolean;
    initialSlideWidth?: number;
}
export interface CarouselProps extends CarouselPropsType {
    bounces?: boolean;
    onScrollBeginDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: CarouselState, carousel: Carousel) => void;
    onMomentumScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: CarouselState, carousel: Carousel) => void;
    style?: StyleProp<ViewStyle>;
    dotStyle?: StyleProp<ViewStyle>;
    dotActiveStyle?: StyleProp<ViewStyle>;
    pagination?: (props: PaginationProps) => React.ReactNode;
    afterChange?: (index: number) => void;
}
export interface CarouselOffset {
    x: number;
    y: number;
}
export interface CarouselState {
    width: number;
    height: number;
    selectedIndex: number;
    isScrolling: boolean;
    autoplayEnd: boolean;
    loopJump: boolean;
    offset: CarouselOffset;
}
export interface PaginationProps {
    vertical?: boolean;
    current: number;
    count: number;
    styles: ReturnType<typeof CarouselStyles>;
    dotStyle?: StyleProp<ViewStyle>;
    dotActiveStyle?: StyleProp<ViewStyle>;
}
declare class Carousel extends React.Component<CarouselProps, CarouselState> {
    static defaultProps: CarouselProps;
    private scrollviewRef;
    private autoplayTimer;
    private androidScrollEndTimer;
    private scrollEndTimter;
    constructor(props: CarouselProps);
    getChildrenCount: (children: React.ReactNode) => number;
    componentDidMount(): void;
    componentWillUnmount(): void;
    loopJump: () => void;
    autoplay: () => void;
    onScrollBegin: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onScrollEnd: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onScrollEndDrag: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    paging: (offsetY: number) => void;
    updateIndex: (offset: CarouselOffset) => void;
    scrollNextPage: () => void;
    renderContent: (pages: React.ReactNode) => JSX.Element;
    renderDots: (index: number) => JSX.Element | null;
    onLayout: (e: LayoutChangeEvent) => void;
    onChildLayout: (e: LayoutChangeEvent) => void;
    render(): JSX.Element;
}
export default Carousel;
