'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function QuillEditor({ value = '', onChange }) {
  const [mounted, setMounted] = useState(false);
  const quillRef = useRef(null);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <p>Loading editor...</p>;

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: () => handleImageUpload(),
      },
    },
  };

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('image', file);

      try {
        const res = await fetch('/api/upload-image', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        const editor = quillRef.current?.getEditor?.();
        const range = editor?.getSelection?.();

        if (range && data.url) {
          editor.insertEmbed(range.index, 'image', data.url);
        } else {
          console.error('Editor not ready or range missing');
        }
      } catch (err) {
        console.error('Image upload failed', err);
      }
    };
  };

  return (
    <div className="mt-2">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        className="bg-white"
      />
    </div>
  );
}
