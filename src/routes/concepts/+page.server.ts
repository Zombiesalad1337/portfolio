import type { Load } from '@sveltejs/kit';
import staticData from '$lib/staticData.json';

export const load: Load = async () => {
	// Sort blogs by ID in descending order and load the first 8
	const blogs = staticData.concepts
		.sort((a, b) => b.id - a.id) // Sort by id in descending order
		.slice(0, 8); // Load only the first 8 blogs

	return {
		blogs,
		totalBlogs: staticData.concepts.length // Include total count for further pagination
	};
};
