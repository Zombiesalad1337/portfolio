// export async function load() {
//     debugger;
//   const modules = import.meta.glob('./blogs/*.svx');
//   const blogs = await Promise.all(
//     Object.entries(modules).map(async ([path, resolver]) => {
//       const { metadata } = await resolver();
//       const slug = path.split('/').pop()?.replace('.svx', '') ?? '';
//       console.log('slug: ' + slug);
//       console.log('metadata: ' + metadata);
//       return { ...metadata, slug };
//     })
//   );
//   console.log(blogs);

//   return {
//     "blogs": blogs
//   };
// }

import { blogMetadata } from './blogs/metadata.js';

export async function load() {
  return {
    blogs: blogMetadata
  };
}
