import { fail } from '@sveltejs/kit';

export const actions = {
	subscribe: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');

		if (String(email).toLowerCase().match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) 
        {
		    return { success: true };
		}
        return fail(400, { email, invalid: true });

	},
};