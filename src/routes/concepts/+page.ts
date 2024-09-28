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

import staticData from '$lib/staticData.json';

export async function load() {
	console.log('concepts: ' + staticData.concepts);
	return {
		blogs: staticData.concepts
	};
}
