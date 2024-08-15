<script lang="ts">
	import { COMPANY_NAME } from '$lib/app'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>{COMPANY_NAME} | {data.name}</title>
</svelte:head>

{#if data}
	<h1>Artist: {data.name}</h1>
{/if}
