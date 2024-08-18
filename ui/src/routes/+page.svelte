<script lang="ts">
	import { goto } from '$app/navigation'
	import { COMPANY_NAME } from '$lib/app'

	function goToArtistsPage(): void {
		goto('artists')
	}
</script>

<svelte:head>
	<title>{COMPANY_NAME} | Home</title>
</svelte:head>

<home-page>
	<div class="h-[92vh] px-48 flex flex-col items-center justify-center">
		<p class="hero-text text-5xl leading-[4rem] text-center">
			Guiding electronic artists to break boundaries and build legacies.
		</p>
		<button class="hero-button mt-16" on:click={() => goToArtistsPage()}> See roster </button>
	</div>
	<div class="bg-zinc-200 px-60 py-12 mb-12">
		<p class="text-zinc-950 text-xl text-center">
			Kinetic Management is dedicated to propelling the careers of innovative electronic music
			artists, amplifying their creative vision, and connecting them with global audiences. We
			provide personalized, strategic management that empowers our artists to break boundaries,
			building lasting legacies, and thrive in the ever-evolving music landscape.
		</p>
	</div>
</home-page>

<style lang="postcss">
	.hero-text {
		animation: fade-in 750ms ease-in-out both;
	}

	.hero-button {
		animation: fade-in 1000ms ease-in-out both;
	}

	button {
		@apply bg-zinc-950;
		@apply text-zinc-50;
		@apply border-2 rounded border-zinc-50;
		@apply px-4 py-2;
		@apply transition-colors duration-[250ms];

		&:hover {
			@apply bg-zinc-50;
			@apply text-zinc-950;
		}
	}
</style>
