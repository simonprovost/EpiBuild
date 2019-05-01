import React from 'react';
import { Animated, LayoutChangeEvent, ScrollView, ViewStyle } from 'react-native';
import { Theme, WithThemeStyles } from '../style';
import { TabBarPropsType, TabData } from './PropsType';
import { TabBarStyle } from './style';
export interface PropsType extends TabBarPropsType, WithThemeStyles<TabBarStyle> {
    scrollValue?: any;
    tabStyle?: ViewStyle;
    tabsContainerStyle?: ViewStyle;
    /** default: false */
    dynamicTabUnderlineWidth?: boolean;
    keyboardShouldPersistTaps?: boolean;
}
export interface StateType {
    _leftTabUnderline: Animated.Value;
    _widthTabUnderline: Animated.Value;
    _containerWidth: number;
    _tabContainerWidth: number;
}
export declare class DefaultTabBar extends React.PureComponent<PropsType, StateType> {
    static defaultProps: {
        animated: boolean;
        tabs: never[];
        goToTab: () => void;
        activeTab: number;
        page: number;
        tabBarUnderlineStyle: {};
        tabBarBackgroundColor: string;
        tabBarActiveTextColor: string;
        tabBarInactiveTextColor: string;
        tabBarTextStyle: {};
        dynamicTabUnderlineWidth: boolean;
    };
    _tabsMeasurements: any[];
    _tabContainerMeasurements: any;
    _containerMeasurements: any;
    _scrollView: ScrollView;
    constructor(props: PropsType);
    componentDidMount(): void;
    updateView: (offset: any) => void;
    necessarilyMeasurementsCompleted(position: number, isLastTab: boolean): any;
    updateTabPanel(position: number, pageOffset: number): void;
    updateTabUnderline(position: number, pageOffset: number, tabCount: number): void;
    onPress: (index: number) => void;
    renderTab: (tab: TabData, index: number, width: number, onLayoutHandler: any, styles: {
        container: import("react-native").RegisteredStyle<ViewStyle>;
        tabs: import("react-native").RegisteredStyle<ViewStyle>;
        tab: import("react-native").RegisteredStyle<ViewStyle>;
        underline: import("react-native").RegisteredStyle<ViewStyle>;
        textStyle: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
    }, theme: Theme) => JSX.Element;
    measureTab: (page: number, event: any) => void;
    render(): JSX.Element;
    onTabContainerLayout: (e: LayoutChangeEvent) => void;
    onContainerLayout: (e: LayoutChangeEvent) => void;
}
