<script lang="ts">

    import * as Card from "$lib/components/ui/card";

    export let sno: string;
    export let title: string;
    export let text: string;
    export let keyPoints: string[];



</script>

<Card.Root>
    <Card.Header>
        <Card.Title>{sno}</Card.Title>
    </Card.Header>

    <Card.Content>
        <p class="text-lg">{title}</p>
        <p>{text}</p>
    </Card.Content>

    <Card.Footer class="flex justify-between">
        {#each keyPoints as point}
            <p class="rounded-full border border-blue-500 px-4">{point}</p>
        {/each}
    </Card.Footer>
</Card.Root>
