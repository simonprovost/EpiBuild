declare const _default: {
    SHORT: number;
    LONG: number;
    show(content: string, duration?: number | undefined, mask?: boolean | undefined): number;
    info(content: string, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    success(content: string, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    fail(content: string, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    offline(content: string, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
    loading(content: string, duration?: number | undefined, onClose?: (() => void) | undefined, mask?: boolean | undefined): number;
};
export default _default;
