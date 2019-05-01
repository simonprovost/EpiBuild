import React from 'react';
import { CameraRollPickerProps } from './CameraRollPicker';
export interface ImageRollProps extends ImageRollTexts {
    onCancel: () => void;
    onSelected: (imgObj: {}) => void;
    cameraPickerProps?: CameraRollPickerProps;
}
export interface ImageRollTexts {
    title?: React.ReactNode;
    cancelText?: React.ReactNode;
}
export default class ImageRoll extends React.Component<ImageRollProps, any> {
    static defaultProps: {
        title: string;
        cancelText: string;
        cameraPickerProps: {};
    };
    onSelected: (images: any[], _: any) => void;
    render(): JSX.Element;
}
