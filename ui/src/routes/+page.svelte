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
	<div
		class="hero-background h-[92vh] px-12 md:px-48 flex flex-col items-center justify-center md:bg-fixed bg-auto md:bg-cover bg-top md:bg-top"
	>
		<p
			class="hero-text text-2xl md:text-5xl leading-[2rem] md:leading-[4rem] text-center -translate-y-10 md:-translate-y-12"
		>
			Guiding electronic artists to break boundaries and build legacies.
		</p>
		<button
			class="hero-button mt-6 -translate-y-10 md:-translate-y-12"
			on:click={() => goToArtistsPage()}
		>
			See roster
		</button>
	</div>
	<div class="bg-zinc-200 px-12 md:px-60 py-12 mb-12">
		<p class="text-zinc-950 text-base md:text-xl text-center">
			Kinetic Management is dedicated to propelling the careers of innovative electronic music
			artists, amplifying their creative vision, and connecting them with global audiences. We
			provide personalized, strategic management that empowers our artists to break boundaries,
			build lasting legacies, and thrive in the ever-evolving musical landscape.
		</p>
	</div>
</home-page>

<style lang="postcss">
	.hero-background {
		animation: fade-in 500ms ease-in-out both;
		background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
			url('$lib/assets/images/landing-background.jpg');
	}

	.hero-text {
		animation: fade-in 750ms ease-in-out both;
	}

	.hero-button {
		animation: fade-in 1000ms ease-in-out both;
	}

	button {
		@apply bg-zinc-950 bg-opacity-20;
		@apply text-zinc-50;
		@apply border-2 rounded border-zinc-50 border-opacity-100;
		@apply px-4 py-2;
		@apply transition-colors duration-[250ms];

		&:hover {
			@apply bg-zinc-50 bg-opacity-80;
			@apply border-opacity-20;
			@apply text-zinc-950;
		}
	}
</style>
