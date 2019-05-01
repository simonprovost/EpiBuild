import PropTypes from 'prop-types';
import React from 'react';
declare type UltimateListViewProps = {
    initialNumToRender?: any;
    horizontal?: any;
    firstLoader?: any;
    scrollEnabled?: any;
    enableEmptySections?: any;
    header?: any;
    paginationFetchingView?: any;
    paginationAllLoadedView?: any;
    paginationWaitingView?: any;
    emptyView?: any;
    separator?: any;
    refreshable?: any;
    refreshableMode?: any;
    refreshableTitle?: any;
    refreshableColors?: any;
    refreshableProgressBackgroundColor?: any;
    refreshableSize?: any;
    refreshableTintColor?: any;
    customRefreshControl?: any;
    refreshableTitlePull?: any;
    refreshableTitleRefreshing?: any;
    refreshableTitleRelease?: any;
    customRefreshView?: any;
    displayDate?: any;
    dateFormat?: any;
    dateTitle?: any;
    arrowImageSource?: any;
    arrowImageStyle?: any;
    refreshViewStyle?: any;
    dateStyle?: any;
    refreshViewHeight?: any;
    pagination?: any;
    autoPagination?: any;
    allLoadedText?: any;
    spinnerColor?: any;
    fetchingSpinnerSize?: any;
    waitingSpinnerSize?: any;
    waitingSpinnerText?: any;
    paginationBtnText?: any;
    numColumns?: any;
};
export interface ListViewProps<T> extends UltimateListViewProps {
    children?: React.ReactNode;
    onFetch: (currentPage: number, startFetch: () => any, abortFetch: () => void) => void;
    renderItem: (item: T, index: number, separators: {
        highlight: () => void;
        unhighlight: () => void;
        updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
    }) => React.ReactElement<any> | null;
    numColumns?: number;
    keyExtractor?: (item: T, index: number) => string;
}
export interface ListViewState {
}
declare class ListView<T> extends React.PureComponent<ListViewProps<T>, ListViewState> {
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    ulv: {
        refresh: () => void;
    };
    refresh: () => void;
    render(): JSX.Element;
}
export default ListView;
