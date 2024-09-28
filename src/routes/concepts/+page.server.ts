import type { Load } from '@sveltejs/kit';
import staticData from '$lib/staticData.json';

export const load: Load = async () => {
	// Load the first 8 blogs initially
	const blogs = staticData.concepts.slice(0, 8); // Replace with DB query later
	return {
		blogs,
		totalBlogs: staticData.concepts.length //find total length as well
	};
};
