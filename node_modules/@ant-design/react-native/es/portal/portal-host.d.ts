import React from 'react';
import PortalManager from './portal-manager';
export declare type PortalHostProps = {
    children: React.ReactNode;
};
export declare type Operation = {
    type: 'mount';
    key: number;
    children: React.ReactNode;
} | {
    type: 'update';
    key: number;
    children: React.ReactNode;
} | {
    type: 'unmount';
    key: number;
};
export declare type PortalMethods = {
    mount: (children: React.ReactNode) => number;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
};
export declare const PortalContext: React.Context<PortalMethods>;
declare class PortalGuard {
    private nextKey;
    add: (e: React.ReactNode) => number;
    remove: (key: number) => void;
}
/**
 * portal
 */
export declare const portal: PortalGuard;
/**
 * Portal host renders all of its children `Portal` elements.
 * For example, you can wrap a screen in `Portal.Host` to render items above the screen.
 * If you're using the `Provider` component, it already includes `Portal.Host`.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Text } from 'react-native';
 * import { Portal } from '@ant-design/react-native';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal.Host>
 *         <Text>Content of the app</Text>
 *       </Portal.Host>
 *     );
 *   }
 * }
 * ```
 *
 * Here any `Portal` elements under `<App />` are rendered alongside `<App />` and will appear above `<App />` like a `Modal`.
 */
export default class PortalHost extends React.Component<PortalHostProps> {
    static displayName: string;
    _nextKey: number;
    _queue: Operation[];
    _manager?: PortalManager;
    componentDidMount(): void;
    componentWillUnmount(): void;
    _setManager: (manager?: any) => void;
    _mount: (children: React.ReactNode, _key?: number | undefined) => number;
    _update: (key: number, children: React.ReactNode) => void;
    _unmount: (key: number) => void;
    render(): JSX.Element;
}
export {};
