// app/blog/[slug]/page.tsx
async function getPost(slug){
  const res = await fetch(`http://localhost:5000/api/posts/${slug}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Post not found');
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const post = await getPost(params.slug);

  return (
    <article className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-[#3D3C42]">{post.title}</h1>
      <p className="text-gray-500 text-sm mt-2">
        By <span className="font-medium">{post.author}</span> •{' '}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {post.tags?.length && (
        <div className="flex gap-2 flex-wrap mt-4 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-[#A6D1E6] text-[#000] px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
      )}

      <p    
        className="prose prose-lg max-w-none mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
