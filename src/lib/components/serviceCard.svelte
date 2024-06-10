<script lang="ts">
    import { fly } from 'svelte/transition';

    import * as Card from "$lib/components/ui/card";

    export let sno: string;
    export let title: string;
    export let header: string;
    export let points: string[];

    let contentVisible: boolean = false;

    function toggleContent(): void {
        contentVisible = !contentVisible;
    }

    let flyHeight: number = 0;

</script>

<div>

<Card.Root>
    <Card.Header class="text-red">
        <Card.Title class="text-red">{sno}</Card.Title>
    </Card.Header>

    {#if contentVisible}
        <!-- TODO: FIND a way to calculate fly from card bottom -->
        <div in:fly={{y: 40,  duration: 500}} out:fly={{y:40, duration: 500}}>
            <Card.Content class="text-white">
                <p>{header}</p>
                <ul>
                    {#each points as point}
                        <li>{point}</li>
                    {/each}
                </ul>
            </Card.Content>
        </div>
    {:else}
        <Card.Content class="text-black">
            <p>{header}</p>
            <ul>
                {#each points as point}
                    <li>{point}</li>
                {/each}
            </ul>
        </Card.Content>
    {/if}

    <Card.Footer class="flex justify-between text-white">
        <p>{title}</p>
        <button on:click={toggleContent}>{contentVisible ? 'x' : '+'}</button>
    </Card.Footer>
</Card.Root>
</div>