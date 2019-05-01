import React from 'react';
export default class BasicListExample extends React.Component<any, any> {
    state: {
        layout: string;
    };
    sleep: (time: any) => Promise<{}>;
    onFetch: (page: number | undefined, startFetch: (arg0: string[], arg1: number) => void, abortFetch: () => void) => Promise<void>;
    renderItem: (item: any) => JSX.Element;
    render(): JSX.Element;
}
export declare const title = "ListView";
export declare const description = "ListView Example";
