<script lang="ts">
	import { COMPANY_NAME } from '$lib/app'
</script>

<header class="h-[8vh] flex flex-row items-center justify-between border-b border-zinc-600 p-4">
	<header-logo><p>{COMPANY_NAME}</p></header-logo>
	<nav>
		<ul class="flex flex-row space-x-6">
			<li><a href="/">Home</a></li>
			<li><a href="/artists">Artists</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
	<!--    <socials />-->
</header>
