import React from 'react';
import { ActionSheetIOSOptions } from 'react-native';
import { WithThemeStyles } from '../style';
import { ActionSheetStyle } from './style/index';
export interface ActionSheetNativeProps extends WithThemeStyles<ActionSheetStyle> {
    onAnimationEnd?: (visible: boolean) => void;
    visible?: boolean;
    config: ActionSheetIOSOptions;
    callback?: (index: number) => void;
}
declare class ActionSheetAndroid extends React.PureComponent<ActionSheetNativeProps, any> {
    constructor(props: ActionSheetNativeProps);
    confirm(index: number): void;
    close: () => void;
    render(): JSX.Element;
}
export default ActionSheetAndroid;
