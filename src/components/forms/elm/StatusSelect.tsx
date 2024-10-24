import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import React, { useState } from 'react'
import {ChevronDownIcon} from "@heroicons/react/20/solid";

const StatusSelect:React.FC = () => {

    const status = [
        { id: 1, name: 'Pending', color: 'accent' },
        { id: 2, name: 'Completed', color: 'success-500' },
    ]
    const [selectedStatus, setSelectedStatus] = useState(status[0]);

    return(
        <Listbox value={selectedStatus} onChange={setSelectedStatus}>
            <div className="relative">
                <ListboxButton
                    className="relative w-full cursor-default rounded-full bg-white py-2 px-3.5 pr-10 text-left text-secondary shadow-sm ring-1 ring-inset ring-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <span className={`inline-block h-2 w-2 flex-shrink-0 rounded-full bg-${selectedStatus.color}`} ></span>
                        <span className="ml-1.5 block truncate">{selectedStatus.name}</span>
                      </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-secondary" />
                    </span>
                </ListboxButton>
                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {status.map((item) => (
                        <ListboxOption key={item.id} value={item} className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white">
                            <span className="flex items-center">
                                <span
                                    className={`inline-block h-2 w-2 flex-shrink-0 rounded-full bg-${item.color}`}></span>
                                <span className="ml-1.5 block truncate">{item.name}</span>
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}

export default StatusSelect