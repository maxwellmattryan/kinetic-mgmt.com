<script lang="ts">
	import { COMPANY_NAME } from '$lib/app'
</script>

<svelte:head>
	<title>{COMPANY_NAME} | Page Not Found</title>
</svelte:head>

<error-page>
	<div class="h-[92vh] px-12 md:px-48 flex flex-col items-center justify-center">
		<h1>Page Not Found</h1>
		<p class="mt-8 text-zinc-500 text-center">
			The page you requested couldn't be found - this could be due to a spelling error in the URL or
			a removed page.
		</p>
	</div>
</error-page>
