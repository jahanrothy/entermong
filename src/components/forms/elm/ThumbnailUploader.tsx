import React, { ChangeEvent, useEffect, useState } from "react";
import { UploadImageFromProps } from "../../../types/thumbnailImage";
import {CloudArrowUpIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import AddPlusIcon from "@/assets/icons/plus_icon.svg";

const ThumbnailUploader: React.FC<UploadImageFromProps> = ({
  onChange,
  selected,
  emptyPreview,
  active,
  label,
  dimension,
  isSquared,
  isLandscaped,
  message,
  labelSecondary,
  plusIcon
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const uniqueId = `thumbnail-uploader-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

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
        const img = new Image();
        img.onload = () => {
          if (dimension) {
            const splitDimension = dimension.split("x");
            const imgWidth = parseFloat(splitDimension[0]);
            const imgHeight = parseFloat(splitDimension[1]);

            if (img.width !== imgWidth || img.height !== imgHeight) {
              setError(`Image dimensions must be ${dimension} pixels.`);
              setPreview(null);
              return;
            }
          }
          if (isSquared && img.width !== img.height) {
            setError("Image must be square.");
            setPreview(null);
            return;
          }
          if (isLandscaped && img.width <= img.height) {
            setError("Image must be landscaped (width greater than height).");
            setPreview(null);
            return;
          }

          setPreview(reader.result as string);
          setError(null);
          onChange(file);
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setPreview(null);
    setError(null);
    onChange(null); // Clear the selected file
  };

  return (
    <div className="gap-2 w-full">
      <label
        htmlFor={uniqueId}
        className="mb-3 block text-sm font-medium leading-5 text-primary"
      >
        {label ?? "Add Thumbnail"}
        {labelSecondary && (
            <span className={'text-gray-500 pl-1'}>
              {labelSecondary}
            </span>
        )}
      </label>
      <div className="sm:col-span-2 sm:mt-0">
        <div className="flex w-full min-h-[211px] overflow-hidden p-0.5 items-center justify-center rounded-lg border-1.5 border-dashed border-neutral-300 bg-gray-50">
          <div className="text-center">
            {preview ? (
                <div className={'relative group'}>
                  <img
                      src={preview}
                      alt="Thumbnail Preview"
                      className="mx-auto h-auto w-full rounded-lg"
                  />
                  <div className={'invisible group-hover:visible bg-black bg-opacity-60 h-full w-full absolute top-0 left-0 flex items-center justify-center'}>
                    <div className={'flex items-center gap-x-4'}>
                      <label htmlFor={uniqueId} className={'w-11 h-11 cursor-pointer rounded-full bg-white bg-opacity-60 flex items-center justify-center'}>
                        <PencilSquareIcon className={'w-6 h-6 text-primary'} />
                        <input
                            id={uniqueId}
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/png, image/jpeg, image/gif"
                            onChange={handleFileChange}
                        />
                      </label>
                      <button type={'button'} onClick={handleDelete} className={'w-11 h-11 rounded-full bg-white bg-opacity-60 flex items-center justify-center'}>
                        <TrashIcon className={'w-6 h-6 text-primary'} />
                      </button>
                    </div>
                  </div>
                </div>
            ) : (
                <div className={'text-center'}>
                  {!plusIcon ? (
                      <CloudArrowUpIcon
                          className="mx-auto h-12 w-12 text-primary"
                          aria-hidden="true"
                      />
                  ) : (
                      <label htmlFor={uniqueId} className={'inline-flex justify-center cursor-pointer'}>
                        <AddPlusIcon />
                      </label>
                  )}
                </div>
            )}
            {!preview && (
                <div className="mt-4 flex gap-2 text-sm leading-6 text-gray-600">
                  <label
                      htmlFor={uniqueId}
                      className="relative text-center w-full cursor-pointer rounded-md font-normal text-primary focus-within:outline-none focus-within:ring-0  focus-within:ring-offset-0"
                  >
                    {!plusIcon && (
                        <span>Drag & Drop or <span className={'text-baseColor font-semibold'}>Choose File</span> to upload</span>
                    )}
                    <input
                        id={uniqueId}
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept="image/png, image/jpeg, image/gif"
                        onChange={handleFileChange}
                    />
                  </label>
                </div>
            )}

            {!error && message && (
                <p className="text-[12px] text-black m-0 p-0 block">{message}</p>
            )}
            {error && (
                <p className="text-[12px] text-red-600 m-0 p-0 block">{error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailUploader;
