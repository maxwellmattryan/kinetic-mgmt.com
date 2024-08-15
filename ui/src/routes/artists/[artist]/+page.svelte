<script lang="ts">
	import { COMPANY_NAME } from '$lib/app'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>{COMPANY_NAME} | {data.artist}</title>
</svelte:head>

<h1>Artist: {data.artist}</h1>
