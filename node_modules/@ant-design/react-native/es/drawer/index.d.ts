import DrawerLayout from '@bang88/react-native-drawer-layout';
import React from 'react';
import { DrawerProps } from './PropsType';
export interface DrawerNativeProps extends DrawerProps {
    drawerRef?: (el: DrawerLayout | null) => void;
    drawerWidth?: number;
    drawerBackgroundColor?: string;
}
export default class Drawer extends React.Component<DrawerNativeProps, any> {
    static defaultProps: {
        position: string;
        open: boolean;
        drawerWidth: number;
    };
    drawer: DrawerLayout | null;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: DrawerNativeProps): void;
    onOpenChange(isOpen: boolean): void;
    render(): JSX.Element;
}
