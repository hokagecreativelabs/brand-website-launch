'use client';

import { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function BlogFormClient() {
  const quillRef = useRef(null);
  const quillInstanceRef = useRef(null); // Use ref instead of state for Quill instance
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      title: '',
      slug: '',
      author: '',
      tags: '',
      content: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      slug: Yup.string().required('Slug is required'),
      author: Yup.string().required('Author is required'),
      tags: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem('hokage_admin_token');
        if (!token) throw new Error('Not authenticated. Please log in.');

        await axios.post('http://localhost:5000/api/posts', values, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        alert('Blog created!');
        formik.resetForm();
        if (quillInstanceRef.current) quillInstanceRef.current.setText('');
        setStep(1);
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || 'Failed to submit blog');
      }
    },
  });

  const handleImageUpload = async () => {
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
        const token = localStorage.getItem('hokage_admin_token');

        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/upload-image`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const imageUrl = res.data.url;

        // Access Quill instance from ref
        const quill = quillInstanceRef.current;
        if (quill) {
          const range = quill.getSelection(true);
          quill.insertEmbed(range.index, 'image', imageUrl);
        } else {
          console.error('Quill instance not available');
        }
      } catch (error) {
        console.error('Image upload failed', error);
        alert('Image upload failed: ' + (error.response?.data?.error || error.message));
      }
    };
  };

  useEffect(() => {
    if (step === 2 && quillRef.current && !quillInstanceRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: 'snow',
        placeholder: 'Write your blog content here...',
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link', 'image'],
              ['clean'],
            ],
            handlers: {
              image: handleImageUpload, // Pass the function reference directly
            },
          },
        },
      });

      quill.on('text-change', () => {
        formik.setFieldValue('content', quill.root.innerHTML);
      });

      quillInstanceRef.current = quill; // Store in ref instead of state
    }

    // Cleanup when component unmounts or step changes
    return () => {
      if (step !== 2 && quillInstanceRef.current) {
        quillInstanceRef.current = null;
      }
    };
  }, [step]);

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-3xl mx-auto mt-8">
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="w-full p-2 border rounded"
            />
            {formik.errors.title && formik.touched.title && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Slug</label>
            <input
              type="text"
              name="slug"
              value={formik.values.slug}
              onChange={formik.handleChange}
              className="w-full p-2 border rounded"
            />
            {formik.errors.slug && formik.touched.slug && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.slug}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Author</label>
            <input
              type="text"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              className="w-full p-2 border rounded"
            />
            {formik.errors.author && formik.touched.author && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.author}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Tags (comma-separated)</label>
            <input
              type="text"
              name="tags"
              value={formik.values.tags}
              onChange={formik.handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Next: Write Content
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Content</label>
            <div
              ref={quillRef}
              className="h-[400px] bg-white border rounded"
            ></div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-sm px-4 py-2 border rounded hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Submit Blog
            </button>
          </div>
        </div>
      )}
    </form>
  );
}