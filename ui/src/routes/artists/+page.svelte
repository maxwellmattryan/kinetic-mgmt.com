<script lang="ts">
	import { ARTISTS } from '$lib/data'
</script>

{#each ARTISTS as artist}
	<h2>{artist.name}</h2>
{/each}
