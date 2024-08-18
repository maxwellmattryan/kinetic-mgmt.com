<script lang="ts">
	import { COMPANY_NAME, CONTACT_EMAIL_ADDRESS } from '$lib/app'
</script>

<footer class="flex flex-col justify-between px-12 md:px-36 pb-8">
	<footer-top class="flex flex-col md:flex-row items-center md:justify-between">
		<footer-top-left>
			<div class="text-center md:text-left">
				<p>{COMPANY_NAME}</p>
				<p>Austin, Texas 78759</p>
			</div>
			<div class="mt-2 md:mt-6">
				<a href="mailto:{CONTACT_EMAIL_ADDRESS}">{CONTACT_EMAIL_ADDRESS}</a>
				<!--                <socials />-->
			</div>
		</footer-top-left>
		<footer-top-right class="flex items-center">
			<nav>
				<ul class="flex flex-row mt-8 md:mt-0 space-x-4 md:space-x-6">
					<li><a href="/">Home</a></li>
					<li><a href="/artists">Artists</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</footer-top-right>
	</footer-top>
	<hr class="h-px border-1 border-zinc-600 mt-12 mb-4" />
	<footer-bottom class="flex flex-row justify-between">
		<p class="text-zinc-500 text-left">Copyright &copy; 2024 {COMPANY_NAME} LLC</p>
		<p class="text-zinc-500 text-right">All Rights Reserved</p>
	</footer-bottom>
</footer>
