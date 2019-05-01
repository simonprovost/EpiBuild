import React from 'react';
export default class ImagePickerExample extends React.Component<any, any> {
    constructor(props: any);
    handleFileChange: (files: any) => void;
    handleFile2Change: (files2: any) => void;
    requestCameraPermission(): Promise<void>;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
