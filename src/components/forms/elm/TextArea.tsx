import React, { forwardRef } from 'react';

interface TextAreaProps extends React.ComponentProps<'textarea'> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, ...props }, ref) => {
    return (
        <textarea
            {...props}
            ref={ref}
            rows={5}
            cols={10}
            className={`block w-full px-4 py-2.5 rounded-lg border-0 text-primary ring-1 ring-inset ring-slate-200 focus-visible:ring-primary focus-visible:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 ${className}`}
        />
    );
});

export default Textarea;