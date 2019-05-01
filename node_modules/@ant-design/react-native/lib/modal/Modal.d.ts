import PropTypes from 'prop-types';
import React from 'react';
import { LayoutChangeEvent, StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { WithThemeStyles } from '../style';
import alert from './alert';
import operation from './operation';
import prompt from './prompt';
import { ModalPropsType } from './PropsType';
import { ModalStyle } from './style/index';
export interface ModalProps extends ModalPropsType<TextStyle>, WithThemeStyles<ModalStyle> {
    style?: StyleProp<ViewStyle>;
    bodyStyle?: StyleProp<ViewStyle>;
}
declare class AntmModal extends React.Component<ModalProps, any> {
    static defaultProps: {
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        style: {};
        bodyStyle: {};
        animationType: string;
        onClose(): void;
        footer: never[];
        transparent: boolean;
        popup: boolean;
        animateAppear: boolean;
        operation: boolean;
    };
    static alert: typeof alert;
    static operation: typeof operation;
    static prompt: typeof prompt;
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    root: View | null;
    onFooterLayout: (e: LayoutChangeEvent) => void;
    saveRoot: (root: any) => void;
    render(): JSX.Element;
}
export default AntmModal;
