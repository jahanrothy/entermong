import React from "react";

export interface DeleteModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onSubmit: (
        isDelete: boolean
    ) => void;
}

export interface DialogModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    title?: string;
    content?: string;
    children?: React.ReactNode;
    button_name: string;
    onSubmit: (
        isChange: boolean
    ) => void;
}

export interface ModalProps {
    title?: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onClose: boolean;
    children?: React.ReactNode;
}