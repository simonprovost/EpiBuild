import { Component } from 'react';
import { GetPhotosParamType, ViewStyle } from 'react-native';
export interface CameraRollPickerStyle {
    wrapper: ViewStyle;
    row: ViewStyle;
    marker: ViewStyle;
    spinner: ViewStyle;
}
export interface CameraRollPickerProps extends GetPhotosParamType {
    maximum: number;
    selectSingleItem?: boolean;
    imagesPerRow: number;
    imageMargin: number;
    containerWidth?: number;
    callback?: (...args: any[]) => any;
    selected?: any[];
    selectedMarker?: JSX.Element;
    backgroundColor?: string;
}
export declare type CameraRollPickerState = {
    selected: any;
    images: any[];
};
declare class CameraRollPicker extends Component<CameraRollPickerProps, CameraRollPickerState> {
    static defaultProps: {
        groupTypes: string;
        maximum: number;
        imagesPerRow: number;
        imageMargin: number;
        first: number;
        selectSingleItem: boolean;
        assetType: string;
        backgroundColor: string;
        selected: never[];
        callback: (selectedImages: any, currentImage: any) => void;
    };
    after: string | undefined;
    constructor(props: CameraRollPickerProps);
    componentWillReceiveProps(nextProps: CameraRollPickerProps): void;
    onFetch: (_: number | undefined, startFetch: any, abortFetch: () => void) => Promise<void>;
    render(): JSX.Element;
    _renderImage: (item: any) => JSX.Element;
    _selectImage(image: {
        uri: any;
    }): void;
    _nEveryRow(data: any, n: number): any[][];
    _arrayObjectIndexOf(array: any, property: string, value: any): any;
}
export default CameraRollPicker;
