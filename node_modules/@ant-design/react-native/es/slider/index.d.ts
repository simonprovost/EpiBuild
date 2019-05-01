import React from 'react';
export interface SliderProps {
    maximumTrackTintColor?: string;
    minimumTrackTintColor?: string;
    onChange?: (value?: number) => void;
    onAfterChange?: (value?: number) => void;
    defaultValue?: number;
    tipFormatter?: (value?: string) => React.ReactNode;
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
}
export default class SliderAntm extends React.Component<SliderProps, any> {
    static defaultProps: {
        onChange(): void;
        onAfterChange(): void;
        defaultValue: number;
        disabled: boolean;
    };
    render(): JSX.Element;
}
