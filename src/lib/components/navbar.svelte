<script lang="ts">

	import { cn } from "$lib/utils.js";

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn("flex items-center justify-between space-x-4 lg:space-x-6", className)}>
    <div class="flex-shrink-0">
        <img class="h-8" src="/favicon.png" alt="Logo" />
    </div>
    <div class="space-x-6">
        <a href="/" class="text-sm font-medium transition-colors hover:text-primary">
            Services	
        </a>

        <a
            href="/"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
            Process
        </a>
        <a
            href="/"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
            Insights
        </a>
        <a
            href="/"
            class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
            Connect
        </a>
    </div>
   <button class="hidden md:block bg-yellow-300 text-gray-800 px-4 py-2 rounded-full hover:bg-yellow-400">Let's talk</button>
</nav>

