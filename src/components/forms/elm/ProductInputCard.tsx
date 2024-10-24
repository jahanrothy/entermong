import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Select from "@/components/forms/elm/Select.tsx";
import { COMBINATION_SELECT } from "@/db/Products.ts";
import Input from "@/components/forms/elm/Input.tsx";

interface InputComponentProps {
    label: string;
    defaultSelected?: string;
    inputType?: string
}

const ProductInputCard: React.FC<InputComponentProps> = ({ label, inputType = 'text', defaultSelected = 'Combination' }) => {
    const [inputs, setInputs] = useState([{ id: 1, name: '', value: '' }]);
    const [getCombination, setCombination] = useState(defaultSelected);

    useEffect(() => {
        setCombination(defaultSelected);
    }, [defaultSelected]);

    const addInput = () => {
        setInputs([...inputs, { id: inputs.length + 1, name: '', value: '' }]);
    };

    const removeInput = (id: number) => {
        setInputs(inputs.filter(input => input.id !== id));
    };

    const handleInputChange = (id: number, key: string, value: string) => {
        const newInputs = inputs.map(input =>
            input.id === id ? { ...input, [key]: value } : input
        );
        setInputs(newInputs);
    };

    const handleCombinationChange = (value: string) => {
        setCombination(value);
        console.log(value);
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary mb-2">
                    {label} <span className="text-baseColor">*</span>
                </span>
                <div>
                    <Select
                        options={COMBINATION_SELECT}
                        value={getCombination} // Use the state here instead of defaultSelected
                        onChange={handleCombinationChange}
                        customClass={'!text-xs !px-2.5 !py-1.5 !h-auto small_select'}
                    />
                </div>
            </div>

            {getCombination === 'Combination' && (
                <div className="space-y-4 mt-2">
                    {inputs.map((input) => (
                        <div key={input.id} className="relative">
                            <Input
                                value={input.value}
                                type={inputType}
                                onChange={(e) => handleInputChange(input.id, 'value', e.target.value)}
                                className="border border-gray-300 rounded-lg w-full px-2 py-1.5"
                            />
                            {inputs.length > 1 && (
                                <button type="button" className="absolute right-2.5 top-[9px]" onClick={() => removeInput(input.id)}>
                                    <XMarkIcon className="w-5 h-5"/>
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addInput} className="w-full text-center bg-red-50 text-baseColor font-medium rounded-lg px-4 py-2.5">
                        Add more
                    </button>
                </div>
            )}

            {getCombination === 'Weight' && (
                <div className="space-y-6 mt-2">
                    <div className={'relative grid grid-cols-2 gap-x-6'}>
                        <h6 className={'py-2.5 px-4 text-sm text-primary rounded-lg border border-neutral-200'}>Name</h6>
                        <h6 className={'py-2.5 px-4 text-sm text-primary rounded-lg border border-neutral-200'}>Weight</h6>
                    </div>
                    {inputs.map((input) => (
                        <div key={input.id} className="relative grid grid-cols-2 gap-x-6">
                            <Input
                                name="name"
                                value={input.name}
                                onChange={(e) => handleInputChange(input.id, 'name', e.target.value)}
                                className="text-center"
                            />
                            <Input
                                name="weight"
                                value={input.value}
                                onChange={(e) => handleInputChange(input.id, 'value', e.target.value)}
                                className="text-center"
                            />
                            {inputs.length > 1 && (
                                <button type="button" className="absolute right-3 top-[9px]" onClick={() => removeInput(input.id)}>
                                    <XMarkIcon className="w-5 h-5"/>
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addInput} className="w-full text-center bg-red-50 text-baseColor font-medium rounded-lg px-4 py-2.5">
                        Add more
                    </button>
                </div>
            )}

            {getCombination === 'Price' && (
                <div className="space-y-6 mt-2">
                    <div className={'relative grid grid-cols-2 gap-x-6'}>
                        <h6 className={'py-2.5 px-4 text-sm text-primary rounded-lg border border-neutral-200'}>Name</h6>
                        <h6 className={'py-2.5 px-4 text-sm text-primary rounded-lg border border-neutral-200'}>Price ($)</h6>
                    </div>
                    {inputs.map((input) => (
                        <div key={input.id} className="relative grid grid-cols-2 gap-x-6">
                            <Input
                                name="name"
                                value={input.name}
                                onChange={(e) => handleInputChange(input.id, 'name', e.target.value)}
                                className="text-center"
                            />
                            <Input
                                name="price"
                                value={input.value}
                                onChange={(e) => handleInputChange(input.id, 'value', e.target.value)}
                                className="text-center"
                            />
                            {inputs.length > 1 && (
                                <button type="button" className="absolute right-3 top-[9px]" onClick={() => removeInput(input.id)}>
                                    <XMarkIcon className="w-5 h-5"/>
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addInput} className="w-full text-center bg-red-50 text-baseColor font-medium rounded-lg px-4 py-2.5">
                        Add more
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductInputCard;
