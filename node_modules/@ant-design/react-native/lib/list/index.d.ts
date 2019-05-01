import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import Item from './ListItem';
import { ListPropsType } from './PropsType';
import { ListStyle } from './style/index';
export interface ListProps extends ListPropsType, WithThemeStyles<ListStyle> {
    style?: StyleProp<ViewStyle>;
}
export default class List extends React.Component<ListProps, any> {
    static Item: typeof Item;
    render(): JSX.Element;
}
