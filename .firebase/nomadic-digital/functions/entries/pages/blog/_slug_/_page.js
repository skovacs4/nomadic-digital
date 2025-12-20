import { b as blogPosts } from "../../../../chunks/blogPosts.js";
function load({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    throw error(404, "Post not found");
  }
  return { post };
}
export {
  load
};
