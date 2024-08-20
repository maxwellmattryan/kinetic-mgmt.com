<script lang="ts">
	import { base } from '$app/paths'
	import {
		Color,
		COMPANY_NAME,
		CONTACT_EMAIL_ADDRESS,
		getColorHexFromIcon,
		Icon as IconName,
	} from '$lib/app'
	import { Banner, Icon } from '@components'
	import type { PageData } from './$types'

	export let data: PageData

	function onBookNowClick(): void {
		location.href = `mailto:${CONTACT_EMAIL_ADDRESS}`
	}
</script>

<svelte:head>
	<title>{COMPANY_NAME} | {data.name}</title>
</svelte:head>

<artist-page>
	<Banner header="Artists" />
	<div
		class="bg-zinc-200 flex flex-col-reverse md:flex-row md:space-x-8 md:items-center justify-between px-12 md:px-36 py-12 mb-12"
	>
		<div class="flex flex-col flex-1 flex-grow items-center mt-6 md:mt-0">
			<h2 class="text-zinc-950">{data.name}</h2>
			<div class="flex flex-row space-x-4 mt-6">
				{#each data.links as link}
					<a href={link.url} target="_blank">
						{#if link.icon}
							<Icon
								icon={link.icon}
								size="sm"
								color={Color.Zinc950}
								hoverColor={getColorHexFromIcon(link.icon)}
							/>
						{/if}
					</a>
				{/each}
			</div>
			<div class="flex flex-col space-y-1 items-center mt-8">
				<div class="flex flex-col space-y-1 items-center justify-center">
					<Icon icon={IconName.Location} size="sm" color={Color.Zinc950} disableHover={true} />
					<p class="icon-label">LOCATION</p>
				</div>
				<p>{data.location.city}, {data.location.country}</p>
			</div>
			<div class="flex flex-col space-y-1 items-center mt-4">
				<div class="flex flex-col space-y-1 items-center justify-center">
					<Icon icon={IconName.Genre} size="sm" color={Color.Zinc950} disableHover={true} />
					<p class="icon-label">{data.genres.length > 1 ? 'GENRES' : 'GENRE'}</p>
				</div>
				<p class="text-center">{data.genres.join(', ')}</p>
			</div>
			{#if data.labels && data.labels.length > 0}
				<div class="flex flex-col space-y-1 items-center mt-4">
					<div class="flex flex-col space-y-1 items-center justify-center">
						<Icon icon={IconName.Label} size="sm" color={Color.Zinc950} disableHover={true} />
						<p class="icon-label">LABELS</p>
					</div>
					<p class="text-center">{data.labels.join(', ')}</p>
				</div>
			{/if}
			<p class="text-justify mt-8 whitespace-break-spaces">{data.bio}</p>
			<button class="mt-8" on:click={() => onBookNowClick()}>Book now</button>
		</div>
		<div class="flex flex-1 flex-grow justify-center">
			<img
				class="object-cover md:max-w-[40vw] md:max-h-[70vh] rounded"
				src="{base}/images/artist_{data.images[1] ?? data.images[0]}"
				alt="{data.name} image"
			/>
		</div>
	</div>
</artist-page>

<style lang="postcss">
	p {
		@apply text-zinc-950;
	}

	.icon-label {
		@apply text-xs;
		@apply text-zinc-700;
	}

	button {
		@apply bg-zinc-200;
		@apply text-zinc-950;
		@apply border-2 rounded border-zinc-950;
		@apply px-4 py-2;
		@apply transition-colors duration-[250ms];

		&:hover {
			@apply bg-zinc-950;
			@apply text-zinc-50;
		}
	}
</style>
