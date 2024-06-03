import { blogMetadata } from '../blogs/metadata.js';
export async function load({ params }) {
  debugger;
  const blog = await import(`../blogs/${params.slug}.svx`);
  return {
    content: blog.default,
    metadata: blog.metadata,
    blogs: blogMetadata
  };
}
