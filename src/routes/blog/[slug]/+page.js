import { blogPosts } from '$lib/data/blogPosts.js';
export function load({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        throw error(404, 'Post not found');
    }

    return { post };
}
