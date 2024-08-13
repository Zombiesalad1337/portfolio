import { writable } from 'svelte/store';

export const highlightedIndex = writable<number>(0);