// app/blog/page.tsx

import Link from 'next/link';

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function BlogListPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto py-16 px-4 space-y-10">
      <h1 className="text-4xl font-bold text-center text-[#3D3C42]">Latest Blog Posts</h1>

      {posts.length === 0 ? (
        <p className="text-center">No posts yet. Stay tuned!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="border rounded-md p-6 bg-white hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold text-[#7F5283]">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                By <span className="font-medium">{post.author}</span> —{' '}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>

              {post.tags?.length && (
                <div className="flex gap-2 flex-wrap mb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#A6D1E6] text-[#000] px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-[#3D3C42] font-semibold hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
