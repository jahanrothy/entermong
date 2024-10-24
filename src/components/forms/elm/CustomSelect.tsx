import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {CustomSelectProps} from "@/types/selectProps";

const CustomSelect: React.FC<CustomSelectProps> = ({ options, selectedOption, onChange }) => {
    return (
        <Listbox value={selectedOption} onChange={onChange}>
            <div className="relative">
                <ListboxButton
                    className="relative w-full text-xs cursor-default rounded-full bg-white py-2 px-3.5 pr-6 text-left text-secondary shadow-sm ring-1 ring-inset ring-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                    <span className="flex items-center">
                      {selectedOption.color && (
                          <span
                          className={`inline-block h-2 w-2 flex-shrink-0 rounded-full bg-${selectedOption.color}`}
                            ></span>
                      )}

                      <span className="ml-1.5 block truncate text-xs">{selectedOption.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1.5">
                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-secondary" />
                    </span>
                </ListboxButton>
                <ListboxOptions
                    transition
                    className="custom_select_options absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {options.map((item) => (
                        <ListboxOption
                            key={item.id}
                            value={item}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-secondary data-[focus]:text-white"
                        >
                          <span className="flex items-center">
                              {item.color && (
                                  <span
                                      className={`inline-block h-2 w-2 flex-shrink-0 rounded-full bg-${item.color}`}
                                  ></span>
                              )}
                              <span className="ml-1.5 block truncate text-xs">{item.name}</span>
                          </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
};

export default CustomSelect;
