import { writable } from 'svelte/store';

// Define the type for the dark mode store (boolean)
export const isDarkMode = writable<boolean>(true);
