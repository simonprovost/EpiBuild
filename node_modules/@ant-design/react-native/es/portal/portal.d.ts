import React from 'react';
import PortalHost from './portal-host';
export declare type PortalProps = {
    /**
     * Content of the `Portal`.
     */
    children?: React.ReactNode;
};
/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from '@ant-design/react-native';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     const { visible } = this.state;
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
declare class Portal extends React.Component<PortalProps> {
    static Host: typeof PortalHost;
    static add: (e: React.ReactNode) => number;
    static remove: (key: number) => void;
    render(): JSX.Element;
}
export default Portal;
