<script lang="ts">
	import { Color, COMPANY_NAME, Icon as IconName } from '$lib/app'
	import { Banner, Icon } from '@components'
	import type { PageData } from './$types'
	import { base } from '$app/paths'

	export let data: PageData
</script>

<svelte:head>
	<title>{COMPANY_NAME} | {data.name}</title>
</svelte:head>

<artist-page>
	<Banner header="Artists" />
	<div class="bg-zinc-200 flex flex-row space-x-8 justify-between px-36 py-12 mb-12">
		<div class="flex flex-col flex-1 flex-grow items-center">
			<h2 class="text-zinc-950">{data.name}</h2>
			<div class="flex flex-row mt-6 space-x-4">
				{#each data.links as link}
					<a href={link.url}>
						{#if link.icon}
							<Icon icon={link.icon} color={Color.Zinc950} size="sm" />
						{/if}
					</a>
				{/each}
			</div>
			<div class="flex flex-row space-x-2 items-center mt-8">
				<Icon icon={IconName.Location} color={Color.Zinc950} size="sm" />
				<p>{data.location.city}, {data.location.country}</p>
			</div>
			<div class="flex flex-row space-x-2 items-center mt-2">
				<Icon icon={IconName.Genre} color={Color.Zinc950} size="sm" />
				<p>{data.genres.join(', ')}</p>
			</div>
			{#if data.labels && data.labels.length > 0}
				<div class="flex flex-row space-x-2 items-center mt-2">
					<Icon icon={IconName.Label} color={Color.Zinc950} size="sm" />
					<p>{data.labels.join(', ')}</p>
				</div>
			{/if}
			<p class="text-justify mt-12">{data.bio}</p>
		</div>
		<div class="flex flex-1 flex-grow justify-center">
			<img
				class="object-cover max-w-[40vw] max-h-[70vh]"
				src="{base}/images/artist_{data.images[0]}"
				alt="{data.name} image"
			/>
		</div>
	</div>
</artist-page>

<style lang="postcss">
	p {
		@apply text-zinc-950;
	}
</style>
