import React from 'react';
import { WithThemeStyles } from '../style';
import { CameraRollPickerProps } from './CameraRollPicker';
import { ImageRollTexts } from './ImageRoll';
import { ImagePickerPropTypes } from './PropsType';
import { ImagePickerStyle } from './style/index';
export interface ImagePickerProps extends ImagePickerPropTypes, WithThemeStyles<ImagePickerStyle>, ImageRollTexts {
    cameraPickerProps?: CameraRollPickerProps;
}
export default class ImagePicker extends React.Component<ImagePickerProps, any> {
    static defaultProps: {
        onChange(): void;
        onFail(): void;
        files: never[];
        selectable: boolean;
    };
    plusText: any;
    plusWrap: any;
    constructor(props: ImagePickerProps);
    onPressIn: (styles: {
        container: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        size: import("react-native").RegisteredStyle<import("react-native").ImageStyle>;
        item: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        image: import("react-native").RegisteredStyle<import("react-native").ImageStyle>;
        closeWrap: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        closeText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        plusWrap: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        plusWrapNormal: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        plusWrapHighlight: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        plusText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
    }) => () => void;
    onPressOut: (styles: {
        container: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        size: import("react-native").RegisteredStyle<import("react-native").ImageStyle>;
        item: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        image: import("react-native").RegisteredStyle<import("react-native").ImageStyle>;
        closeWrap: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        closeText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
        plusWrap: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        plusWrapNormal: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        plusWrapHighlight: import("react-native").RegisteredStyle<import("react-native").ViewStyle>;
        plusText: import("react-native").RegisteredStyle<import("react-native").TextStyle>;
    }) => () => void;
    showPicker: () => void;
    addImage(imageObj: any): void;
    removeImage(idx: number): void;
    hideImageRoll: () => void;
    onImageClick(index: number): void;
    render(): JSX.Element;
}
