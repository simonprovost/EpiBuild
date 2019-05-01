import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import { MarqueeProps } from './Marquee';
import { NoticeBarPropsType } from './PropsType';
import { NoticeBarStyle } from './style/index';
export interface NoticeNativeProps extends NoticeBarPropsType, WithThemeStyles<NoticeBarStyle> {
    marqueeProps?: MarqueeProps;
    style?: StyleProp<ViewStyle>;
}
export default class NoticeBar extends React.Component<NoticeNativeProps, any> {
    static defaultProps: {
        mode: string;
        onPress(): void;
    };
    constructor(props: NoticeNativeProps);
    onPress: () => void;
    render(): JSX.Element;
}
