import React from 'react';
import { PortalMethods } from './portal-host';
export declare type PortalConsumerProps = {
    manager: PortalMethods;
    children: React.ReactNode;
};
export default class PortalConsumer extends React.Component<PortalConsumerProps> {
    _key: any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): null;
}
