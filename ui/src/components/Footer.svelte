<script lang="ts">
	import { COMPANY_NAME, CONTACT_EMAIL_ADDRESS } from '$lib/app'
</script>

<footer class="flex flex-col justify-between px-36 pb-8">
	<footer-top class="flex flex-row space-x-72">
		<footer-top-left>
			<div>
				<p>{COMPANY_NAME}</p>
				<p>Austin, Texas 78759</p>
			</div>
			<div class="mt-6">
				<a href="mailto:{CONTACT_EMAIL_ADDRESS}">{CONTACT_EMAIL_ADDRESS}</a>
				<!--                <socials />-->
			</div>
		</footer-top-left>
		<footer-top-right class="flex items-center">
			<nav>
				<ul class="flex flex-row space-x-4">
					<li><a href="/">Home</a></li>
					<li><a href="/artists">Artists</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</footer-top-right>
	</footer-top>
	<hr class="h-px border-1 border-zinc-600 mt-12 mb-4" />
	<footer-bottom class="flex flex-row justify-between">
		<p class="text-zinc-500">Copyright &copy; 2024 {COMPANY_NAME} LLC</p>
		<p class="text-zinc-500">All Rights Reserved</p>
	</footer-bottom>
</footer>
