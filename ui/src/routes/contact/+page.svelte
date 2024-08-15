<script lang="ts">
	import { COMPANY_NAME, CONTACT_EMAIL_ADDRESS } from '$lib/app'
	import { Banner } from '@components'
</script>

<svelte:head>
	<title>{COMPANY_NAME} | Contact</title>
</svelte:head>

<contact-page>
	<Banner header="Contact" />
	<div class="h-[32vh] flex flex-col items-center justify-center bg-zinc-200 mb-12">
		<h2>Information</h2>
		<p class="mt-4">Email: <a href="mailto:{CONTACT_EMAIL_ADDRESS}">{CONTACT_EMAIL_ADDRESS}</a></p>
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
