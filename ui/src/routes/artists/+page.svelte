<script lang="ts">
	import { base } from '$app/paths'
	import { COMPANY_NAME } from '$lib/app'
	import { ARTISTS } from '$lib/data'
	import { Banner } from '@components'

	let artists = [...ARTISTS]
</script>

<svelte:head>
	<title>{COMPANY_NAME} | Artists</title>
</svelte:head>

<artists-page>
	<Banner header="Artists" />
	<div class="bg-zinc-200 px-36 py-12 mb-12">
		<div class="grid grid-cols-3 gap-12 grid-items-center">
			{#each artists as artist}
				<div>
					<a href="/artists/{artist.page}">
						<img
							class="object-cover w-full max-h-[36vh]"
							src="{base}/images/artist_{artist.images[0]}"
							alt="{artist.name} image"
						/>
						<h2 class="font-medium text-zinc-950 text-center mt-4">{artist.name}</h2>
					</a>
				</div>
			{/each}
		</div>
	</div>
</artists-page>

<style lang="postcss">
	a img {
		@apply transition-opacity duration-[250ms];

		&:hover {
			@apply opacity-75;
		}
	}

	a h2 {
		@apply transition-colors duration-[250ms];

		&:hover {
			@apply text-zinc-500;
		}
	}
</style>
