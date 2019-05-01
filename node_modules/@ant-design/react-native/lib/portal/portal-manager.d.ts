import React from 'react';
export declare type State = {
    portals: Array<{
        key: number;
        children: React.ReactNode;
    }>;
};
export declare type PortalManagerState = {
    portals: any[];
};
/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends React.PureComponent<{}, PortalManagerState> {
    state: State;
    mount: (key: number, children: React.ReactNode) => void;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
    render(): JSX.Element[];
}
