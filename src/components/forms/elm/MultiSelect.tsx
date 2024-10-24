import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { useState } from 'react'
import {ChevronUpDownIcon, CheckIcon} from "@heroicons/react/20/solid";



const MultiSelect:React.FC = () => {

    const people = [
        { id: 1, name: 'Durward Reynolds' },
        { id: 2, name: 'Kenton Towne' },
        { id: 3, name: 'Therese Wunsch' },
        { id: 4, name: 'Benedict Kessler' },
        { id: 5, name: 'Katelyn Rohan' },
    ]
    const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]])
    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
            {({ open }) => (

                <div className="relative">
                    <ListboxButton className="relative w-full flex items-center flex-wrap gap-2 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        {selectedPeople.map((person) => (
                            <span className='rounded text-xs px-2 py-1 bg-indigo-50'>{person.name}</span>
                        ))}
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                </span>
                    </ListboxButton>
                    <Transition show={open} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <ListboxOptions
                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            {people.map((person) => (
                                <ListboxOption
                                    key={person.id}
                                    value={person}
                                    className={({focus}) =>
                                        classNames(
                                            focus ? 'bg-indigo-600 text-white' : '',
                                            !focus ? 'text-gray-900' : '',
                                            'relative cursor-default select-none py-2 pl-8 pr-4'
                                        )
                                    }
                                >
                                    {({selected, focus}) => (
                                        <>
                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                    {person.name}
                                </span>
                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        focus ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                    )}
                                                >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                                    </span>
                                            ) : null}
                                        </>
                                    )}

                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Transition>
                </div>

            )}

        </Listbox>
    )
}

export default MultiSelect