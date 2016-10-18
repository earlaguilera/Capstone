export interface ModalOptions {
    closeOnEscape: boolean;
    closeOnOutsideClick: boolean;
    hideCloseButton: boolean;
    modalClass?: string;
    onClose?: Function;
    onOpen?: Function;
    onSubmit?: Function;
    submitButtonLabel?: string;
    title: string;
}

export interface ModalDescription {
    content?: any;
    footer?: any;
    header?: any;
    options: ModalOptions;
}
