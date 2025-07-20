'use client';

import dynamic from 'next/dynamic';

// ✅ Dynamically load the client-only component
const BlogFormClient = dynamic(() => import('./BlogFormClient'), {
  ssr: false,
  loading: () => <p>Loading form...</p>,
});

export default function BlogForm() {
  return <BlogFormClient />;
}

