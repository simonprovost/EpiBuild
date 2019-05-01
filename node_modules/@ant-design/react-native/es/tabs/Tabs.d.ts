import React from 'react';
import { Animated, LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent, ScrollView, ViewPagerAndroid } from 'react-native';
import { WithThemeStyles } from '../style';
import { DefaultTabBar } from './DefaultTabBar';
import { PropsType, TabData } from './PropsType';
import { TabsStyle } from './style/tabs';
export interface StateType {
    currentTab: number;
    scrollX: Animated.Value;
    scrollValue: Animated.Value;
    containerWidth: number;
}
export interface TabsProps extends PropsType, WithThemeStyles<TabsStyle> {
}
export declare class Tabs extends React.PureComponent<TabsProps, StateType> {
    static defaultProps: PropsType;
    static DefaultTabBar: typeof DefaultTabBar;
    scrollView: {
        _component: ScrollView;
    };
    viewPager: ViewPagerAndroid | null;
    protected instanceId: number;
    protected prevCurrentTab: number;
    protected tabCache: {
        [index: number]: React.ReactNode;
    };
    /** compatible for different between react and preact in `setState`. */
    private nextCurrentTab;
    constructor(props: PropsType);
    componentDidMount(): void;
    setScrollView: (sv: any) => void;
    renderContent: (getSubElements?: (defaultPrefix?: string, allPrefix?: string) => {
        [key: string]: React.ReactNode;
    }) => JSX.Element;
    onMomentumScrollEnd: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
    handleLayout: (e: LayoutChangeEvent) => void;
    scrollTo: (index: number, animated?: boolean) => void;
    render(): JSX.Element;
    getTabIndex(props: PropsType): number;
    isTabVertical: (direction?: "vertical" | "horizontal" | undefined) => boolean;
    shouldRenderTab: (idx: number) => boolean;
    componentWillReceiveProps(nextProps: PropsType): void;
    componentDidUpdate(): void;
    getOffsetIndex: (current: number, width: number, threshold?: number) => number;
    goToTab(index: number, force?: boolean, newState?: any): boolean;
    tabClickGoToTab(index: number): void;
    getTabBarBaseProps(): {
        activeTab: number;
        animated: boolean;
        goToTab: any;
        onTabClick: ((tab: TabData, index: number) => void) | undefined;
        tabBarActiveTextColor: string | undefined;
        tabBarBackgroundColor: string | undefined;
        tabBarInactiveTextColor: string | undefined;
        tabBarPosition: "top" | "bottom" | undefined;
        tabBarTextStyle: import("react-native").StyleProp<import("react-native").TextStyle>;
        tabBarUnderlineStyle: import("react-native").StyleProp<import("react-native").ViewStyle>;
        renderTab: ((tab: TabData) => React.ReactNode) | undefined;
        renderUnderline: ((style: any) => React.ReactNode) | undefined;
        tabs: TabData[];
        instanceId: number;
    };
    renderTabBar(tabBarProps: any, DefaultTabBar: React.ComponentClass): {} | null | undefined;
    getSubElements: () => (defaultPrefix?: string, allPrefix?: string) => {
        [key: string]: React.ReactNode;
    };
    getSubElement(tab: TabData, index: number, subElements: (defaultPrefix: string, allPrefix: string) => {
        [key: string]: any;
    }, defaultPrefix?: string, allPrefix?: string): any;
}
