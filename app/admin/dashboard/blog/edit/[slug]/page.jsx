'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function EditBlog({ params }) {
  const { slug } = params;
  const router = useRouter();
  const [form, setForm] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/posts/slug/${slug}`);
        setForm({ title: data.title, content: data.content });
      } catch (err) {
        toast.error('Failed to fetch blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/posts/slug/${slug}`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      toast.success('Post updated successfully');
      router.push('/admin/blogs');
    } catch (err) {
      toast.error('Update failed');
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-purple">Edit Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          rows="10"
          placeholder="Content"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-purple text-white py-2 px-4 rounded hover:bg-opacity-90"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
