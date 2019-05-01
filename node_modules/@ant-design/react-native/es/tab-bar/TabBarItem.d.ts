import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import { TabBarIcon } from './PropsType';
import TabBarItemStyles from './style';
export interface TabBarItemProps {
    badge?: string | number;
    onPress?: () => void;
    selected?: boolean;
    icon?: TabBarIcon;
    selectedIcon?: TabBarIcon;
    title: string;
    tintColor?: string;
    unselectedTintColor?: string;
    iconStyle?: StyleProp<ImageStyle>;
    renderAsOriginal?: boolean;
    styles?: ReturnType<typeof TabBarItemStyles>;
}
export default class TabBarItem extends React.Component<TabBarItemProps, any> {
    static defaultProps: {
        onPress(): void;
    };
    render(): JSX.Element;
}
