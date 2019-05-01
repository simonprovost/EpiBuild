import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { SwipeoutButtonProperties, SwipeoutProperties } from 'react-native-swipeout';
export interface SwipeActionProps extends SwipeoutProperties {
    left?: SwipeoutButtonProps[];
    right?: SwipeoutButtonProps[];
}
export interface SwipeoutButtonProps extends SwipeoutButtonProperties {
    style?: StyleProp<TextStyle> & {
        backgroundColor: string;
    };
}
declare class SwipeAction extends React.Component<SwipeActionProps> {
    static defaultProps: SwipeActionProps;
    renderCustomButton(button: SwipeoutButtonProps): {
        text: {};
        onPress: (() => void) | undefined;
        type: string;
        component: JSX.Element;
        backgroundColor: string;
        color: string;
        disabled: boolean;
    };
    render(): JSX.Element;
}
export default SwipeAction;
