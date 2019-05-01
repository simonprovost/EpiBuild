import React from 'react';
export interface RenderIconParams {
    starting: boolean;
    waiting: boolean;
    error: boolean;
}
export interface StepsItemProps {
    width?: number;
    size?: string;
    current?: number;
    index?: number;
    last?: boolean;
    direction?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    status?: string;
    icon?: React.ReactNode;
    errorTail?: number;
    styles?: any;
    renderIcon?: (params: RenderIconParams) => React.ReactNode;
}
export default class StepsItem extends React.Component<StepsItemProps, any> {
    render(): JSX.Element;
}
