import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import staticData from '$lib/staticData.json';

// Type for the POST request body
interface LoadMoreRequest {
	offset: number;
	limit: number;
	filter: string;
}

// Define the POST request handler
export const POST: RequestHandler = async ({ request }) => {
	const { offset, limit, filter }: LoadMoreRequest = await request.json(); // Get offset and limit from request payload

	await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second (1000 ms)
	// Simulate fetching more blogs from a database (slice in place of DB query)
	console.log('before filter');
	let filteredBlogs = staticData.concepts;
	if (filter !== 'All') {
		console.log('in filter: ' + filter);
		filteredBlogs = filteredBlogs.filter((blog) => blog.type === filter);
		console.log('filteredBlogs' + filteredBlogs);
	}

	// Sort by ID descending
	filteredBlogs.sort((a, b) => b.id - a.id);

	// Slice the blogs for loading
	const moreBlogs = filteredBlogs.slice(offset, offset + limit);

	return json({ blogs: moreBlogs, totalBlogs: filteredBlogs.length });
};
