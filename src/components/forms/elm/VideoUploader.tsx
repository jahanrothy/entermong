import React, { useState, ChangeEvent, useEffect } from 'react';
import { PhotoIcon } from '@heroicons/react/20/solid';
import { UploadDocFromProps } from '../../../types/UploadImageFromProps'

const VideoUploader: React.FC<UploadDocFromProps> = ({ onChange, selected, emptyPreview, active, label, message }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const uniqueId = `doc-uploader-${Math.random().toString(36).substr(2, 9)}`;

    useEffect(() => {
        if (emptyPreview || !active || !selected) {
            setPreview("");
        } else if (selected) {
            setPreview(selected);
        }
    }, [selected, active, emptyPreview]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {

                console.log(reader.result);
                setPreview(reader.result as string);
                setError(null);
                onChange(file);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="gap-2 w-[320px]">
            <label htmlFor={uniqueId} className="mb-2 block text-sm font-medium leading-6 text-gray-900">
                {label ?? ("Add Documents")}
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex w-full justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                        {preview ? (
                            <img src={preview} alt="Thumbnail Preview" className="mx-auto h-auto w-full max-w-[250px]" />
                        ) : (
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                        )}
                        <div className="mt-4 flex gap-2 text-sm leading-6 text-gray-600">
                            <label
                                htmlFor={uniqueId}
                                className="relative text-center w-full cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-0  focus-within:ring-offset-0 hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input
                                    id={uniqueId}
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">MP4, MOV, WMV up to 10MB</p>
                        {!error && message && <p className="text-[12px] text-black m-0 p-0 block">{message}</p>}
                        {error && <p className="text-[12px] text-red-600 m-0 p-0 block">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUploader;
