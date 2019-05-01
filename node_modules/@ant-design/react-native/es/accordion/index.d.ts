import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { AccordionProps } from 'react-native-collapsible/Accordion';
import { WithThemeStyles } from '../style';
import { AccordionStyle } from './style/index';
export interface AccordionPanelProps {
    key?: string;
    header: any;
}
export interface AccordionNativeProps<T> extends WithThemeStyles<AccordionStyle>, Partial<AccordionProps<T>> {
    style?: StyleProp<ViewStyle>;
}
export interface AccordionHeader {
    title: string;
    content: React.ReactElement<any>;
    style: StyleProp<ViewStyle>;
}
declare class Accordion<T extends AccordionHeader> extends React.Component<AccordionNativeProps<T>, any> {
    static Panel: any;
    renderHeader: (styles: {
        container: import("react-native").RegisteredStyle<ViewStyle>;
        header: import("react-native").RegisteredStyle<ViewStyle>;
        arrow: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        headerWrap: import("react-native").RegisteredStyle<ViewStyle>;
        headerText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        content: import("react-native").RegisteredStyle<ViewStyle>;
        contentText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
    }) => (section: T, _: number, isActive: boolean) => JSX.Element;
    renderContent: (styles: {
        container: import("react-native").RegisteredStyle<ViewStyle>;
        header: import("react-native").RegisteredStyle<ViewStyle>;
        arrow: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        headerWrap: import("react-native").RegisteredStyle<ViewStyle>;
        headerText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        content: import("react-native").RegisteredStyle<ViewStyle>;
        contentText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
    }) => (section: T) => JSX.Element;
    render(): JSX.Element;
}
export default Accordion;
