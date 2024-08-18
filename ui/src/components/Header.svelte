<script lang="ts">
	import { COMPANY_NAME } from '$lib/app'
</script>

<header
	class="h-[8vh] flex flex-row items-center justify-between border-b border-zinc-600 px-6 py-4"
>
	<header-logo>
		<a href="/" class="font-semibold">{COMPANY_NAME}</a>
	</header-logo>
	<nav>
		<ul class="flex flex-row space-x-6">
			<li><a href="/">Home</a></li>
			<li><a href="/artists">Artists</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
	<!--    <socials />-->
</header>

<style lang="postcss">
	header-logo a {
		@apply text-zinc-50;

		&:hover {
			@apply text-zinc-50;
		}
	}
</style>
