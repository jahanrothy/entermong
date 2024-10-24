import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import React from "react";
import {ModalProps} from "@/types/modal";
import {XMarkIcon} from "@heroicons/react/24/outline";

const Modal:React.FC<ModalProps> = ({ open, setOpen, children, title }) => {
    const close = () => {
        setOpen(false)
    }

    return(
        <Transition show={open}>
            <Dialog className="relative z-50" onClose={setOpen}>
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:p-6">
                                <div className={'flex justify-between pb-3 mb-3 border-b border-gray-200'}>
                                    <h4 className={'text-2xl font-bold text-secondary'}>{title}</h4>
                                    <button
                                        type={'button'}
                                        className={''}
                                        onClick={close}
                                    >
                                        <XMarkIcon className={'w-8 h-8 text-secondary'}/>
                                    </button>
                                </div>
                                {children}
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal