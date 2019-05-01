import * as React from 'react';
import { Locale } from '../locale-provider';
import { Theme } from '../style';
export interface ProviderProps {
    locale?: Partial<Locale>;
    theme?: Partial<Theme>;
}
export default class Provider extends React.Component<ProviderProps> {
    render(): JSX.Element;
}
