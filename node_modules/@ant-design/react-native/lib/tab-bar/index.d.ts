import React from 'react';
import { TabBarProps } from './PropsType';
import TabBarStyles, { TabBarStyle } from './style/index';
import TabBarItem from './TabBarItem';
export interface TabBarNativeProps extends TabBarProps {
    styles?: TabBarStyle;
}
declare class TabBar extends React.Component<TabBarNativeProps, any> {
    static defaultProps: {
        barTintColor: string;
        tintColor: string;
        unselectedTintColor: string;
    };
    static Item: typeof TabBarItem;
    getPanes(styles: ReturnType<typeof TabBarStyles>, content: boolean): any[];
    render(): JSX.Element;
}
export default TabBar;
