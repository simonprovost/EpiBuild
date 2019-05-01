import React from 'react';
export default class AccordionExmple extends React.Component<any, any> {
    state: {
        activeSections: number[];
    };
    onChange: (activeSections: number[]) => void;
    render(): JSX.Element;
}
