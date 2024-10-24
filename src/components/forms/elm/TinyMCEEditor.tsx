import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {TinyMCEEditorProps} from "@/types/editor";

const TinyMCEEditor: React.FC<TinyMCEEditorProps> = ({ value, onChange, active }) => {
    const editorRef = useRef<any>(null);
    const [editorContent, setEditorContent] = useState<string>("");

    useEffect(() => {
        if (value){
            setEditorContent(value);
        }

        if (!active){
            setEditorContent("")
        }
    }, [value, active]);

    const handleEditorChange = (content: string) => {
        onChange(content);
    };

    return (
        <div>
            <Editor
                onInit={(_, editor) => (editorRef.current = editor)}
                initialValue={editorContent}
                onEditorChange={handleEditorChange}
                tinymceScriptSrc = "https://cdnjs.cloudflare.com/ajax/libs/tinymce/7.4.1/tinymce.min.js"
                init={{
                    height: 300,
                    menubar: false,
                    branding: false,
                    statusbar: false,
                    plugins: [
                        'advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists',
                        'searchreplace', 'table', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
            />
        </div>
    );
};

export default TinyMCEEditor;
