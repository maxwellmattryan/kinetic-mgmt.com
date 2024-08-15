<script lang="ts">
	import { base } from '$app/paths'
	import { COMPANY_NAME } from '$lib/app'
	import { ARTISTS } from '$lib/data'
	import { Banner } from '@components'

	let artists = [...ARTISTS, ...ARTISTS]
</script>

<svelte:head>
	<title>{COMPANY_NAME} | Artists</title>
</svelte:head>

<artists-page>
	<Banner header="Artists" />
	<div class="bg-zinc-200 px-36 py-12 mb-12">
		<div class="grid grid-cols-3 gap-12">
			{#each artists as artist}
				<div>
					<img
						class="object-cover w-full max-h-[36vh]"
						src="{base}/images/artist_{artist.images[0]}"
						alt="{artist.name} image"
					/>
					<h2 class="font-medium text-zinc-950 text-center mt-4">{artist.name}</h2>
				</div>
			{/each}
		</div>
	</div>
</artists-page>
