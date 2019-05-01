import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface WhiteSpaceProps {
    style?: StyleProp<ViewStyle>;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
declare class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
}
export default WhiteSpace;
