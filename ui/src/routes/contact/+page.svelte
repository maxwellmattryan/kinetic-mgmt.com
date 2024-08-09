<script lang="ts">
	import { Banner } from '@components'
</script>

<svelte:head>
	<title>Kinetic Management | Contact</title>
</svelte:head>

<contact-page>
	<Banner header="Contact" />
	<div class="h-[32vh] flex flex-col items-center justify-center bg-zinc-200 mb-12">
		<h2>Information</h2>
		<p class="mt-2">Phone: +1 (512) 123-4567</p>
		<p>Email: <a href="mailto:contact@kineticmanagement.com">contact@kineticmanagement.com</a></p>
	</div>
</contact-page>

<style lang="postcss">
	h2,
	p {
		@apply text-zinc-950;
	}

	a {
		@apply text-zinc-500;

		&:hover {
			@apply text-zinc-400;
		}
	}
</style>
