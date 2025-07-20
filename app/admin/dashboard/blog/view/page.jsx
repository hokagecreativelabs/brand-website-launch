'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'react-toastify';
import QuillEditor from '@/components/admin/QuillEditor';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isUpdating, setIsUpdating] = useState(false);
  const [originalPost, setOriginalPost] = useState(null);
  const totalSteps = 3;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
      setPosts(data);
    } catch (error) {
      toast.error('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('hokage_admin_token')}`,
        },
      });
      toast.success('Post deleted!');
      fetchPosts();
    } catch (err) {
      toast.error('Failed to delete');
    }
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${editingPost._id}`,
        {
          title: editingPost.title,
          content: editingPost.content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('hokage_admin_token')}`,
          },
        }
      );

      toast.success('Post updated successfully!');
      closeEditModal();
      fetchPosts();
    } catch (err) {
      toast.error('Failed to update post');
      setIsUpdating(false);
    }
  };

  const openEditModal = (post) => {
    setOriginalPost({ ...post });
    setEditingPost({ ...post });
    setCurrentStep(1);
  };

  const closeEditModal = () => {
    setEditingPost(null);
    setOriginalPost(null);
    setCurrentStep(1);
    setIsUpdating(false);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceedToStep = (step) => {
    switch (step) {
      case 2:
        return editingPost?.title?.trim().length >= 3;
      case 3:
        return editingPost?.content?.trim().length >= 10;
      default:
        return true;
    }
  };

  const hasChanges = () => {
    if (!originalPost || !editingPost) return false;
    return (
      originalPost.title !== editingPost.title ||
      originalPost.content !== editingPost.content
    );
  };

  const getStepTitle = (step) => {
    switch (step) {
      case 1:
        return 'Basic Information';
      case 2:
        return 'Content Editor';
      case 3:
        return 'Review & Publish';
      default:
        return '';
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Post Title *</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={editingPost?.title || ''}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, title: e.target.value })
                }
                placeholder="Enter post title"
                maxLength={100}
              />
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Min 3 characters</span>
                <span>{editingPost?.title?.length || 0}/100</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Post Content *</label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <QuillEditor
                value={editingPost?.content || ''}
                onChange={(val) => setEditingPost({ ...editingPost, content: val })}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Minimum 10 characters required. Use formatting tools above.
            </p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Review Your Changes</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-gray-700">Title:</h5>
                  <div className="mt-1 p-3 bg-white border border-gray-200 rounded">
                    {editingPost?.title}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Content Preview:</h5>
                  <div className="mt-1 p-3 bg-white border border-gray-200 rounded max-h-40 overflow-y-auto prose prose-sm">
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          editingPost?.content?.slice(0, 300) +
                          (editingPost?.content?.length > 300 ? '...' : ''),
                      }}
                    />
                  </div>
                </div>
              </div>

              {hasChanges() && (
                <div className="mt-4 flex items-center text-green-600 text-sm font-medium">
                  ✅ Changes detected - ready to update
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-semibold text-purple-800 mb-8">All Blog Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-md p-5 border">
            <h3 className="text-xl font-bold text-[#3D3C42] mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-3">
              {post.content?.replace(/<[^>]+>/g, '').slice(0, 100) + '...'}
            </p>
            <p className="text-xs text-gray-400 mb-2">
              Posted {formatDistanceToNow(new Date(post.createdAt))} ago
            </p>
            <div className="flex justify-between">
              <span
                onClick={() => openEditModal(post)}
                className="text-sm text-blue-600 hover:underline cursor-pointer"
              >
                Edit
              </span>
              <span
                onClick={() => handleDelete(post._id)}
                className="text-sm text-red-600 hover:underline cursor-pointer"
              >
                Delete
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {editingPost && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg w-full max-w-3xl h-[95vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Edit Blog Post</h2>
        <button onClick={closeEditModal}>✕</button>
      </div>

      {/* Step Header */}
      <div className="mb-4 text-sm text-gray-600">
        Step {currentStep} of {totalSteps} - {getStepTitle(currentStep)}
      </div>

      {/* Step Content */}
      {renderStepContent()}

      {/* ⬇️ Step Controls BELOW the content, outside switch */}
      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            Previous
          </button>
        )}
        {currentStep < totalSteps && (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded"
            disabled={!canProceedToStep(currentStep + 1)}
          >
            Next
          </button>
        )}
        {currentStep === totalSteps && (
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-green-600 text-white rounded"
            disabled={!hasChanges()}
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  </div>
)}

    </div>
  );
}
