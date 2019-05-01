import { OutlineGlyphMapType } from '@ant-design/icons-react-native';
import React from 'react';
import { TextProps } from 'react-native';
export declare type IconNames = OutlineGlyphMapType;
export interface IconProps extends TextProps {
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
    color?: string;
    name: IconNames;
}
export default class Icon extends React.Component<IconProps, any> {
    static defaultProps: {
        size: string;
    };
    static displayName: string;
    render(): JSX.Element;
}
