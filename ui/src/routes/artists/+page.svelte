<script lang="ts">
	import { ARTISTS } from '$lib/data'
	import { Icon as IconName } from '$lib/app'
	import { Icon } from '@components'
</script>

{#each ARTISTS as artist}
	<h2>{artist.name}</h2>
	<Icon icon={IconName.ResidentAdvisor} />
{/each}
