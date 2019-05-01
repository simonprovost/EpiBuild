import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Placement } from 'react-native-modal-popover/lib/PopoverGeometry';
import { WithThemeStyles } from '../style';
import { PopoverStyle } from './style';
export interface PopoverProps extends WithThemeStyles<PopoverStyle> {
    triggerStyle?: StyleProp<ViewStyle>;
    onSelect?: (node: any, index?: number) => void;
    overlay: React.ReactNode;
    disabled?: boolean;
    renderOverlayComponent?: (node: React.ReactNode) => React.ReactNode;
    placement?: Placement | 'auto';
}
export interface PopoverItemProps {
    value: any;
    [key: string]: any;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}
export declare class PopoverItem extends React.PureComponent<PopoverItemProps> {
    static displayName: 'PopoverItem';
    render(): JSX.Element;
}
export default class Popover extends React.PureComponent<PopoverProps, any> {
    static defaultProps: {
        onSelect: () => void;
    };
    static Item: typeof PopoverItem;
    onSelect: (value: any, closePopover: any) => void;
    renderOverlay: (closePopover: any) => {} | null | undefined;
    render(): JSX.Element;
}
