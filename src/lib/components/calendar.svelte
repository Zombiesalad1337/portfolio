<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { type IOptions } from 'vanilla-calendar-pro/types';
	import VanillaCalendar from 'vanilla-calendar-pro';
	import 'vanilla-calendar-pro/build/vanilla-calendar.min.css';

	let calendar: any;

	onMount(() => {
		const options: IOptions = {
			CSSClasses: {
				calendar: 'calendar'
			}
		};
		const calendar = new VanillaCalendar('#calendar', options);
		calendar.init();
	});

	// Optionally, destroy the calendar when the component is unmounted
	onDestroy(() => {
		if (calendar) {
			calendar.destroy();
		}
	});
</script>

<!-- HTML for the calendar -->
<div id="calendar"></div>

<!-- w-96 and h-96 set width/height to 384px -->

<style>
	.calendar {
		@apply relative box-border flex w-[600px] min-w-[272px] max-w-full flex-col rounded-xl p-4 opacity-100 transition-opacity;
	}
</style>
