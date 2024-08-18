<script lang="ts">
	export let header: string | undefined
</script>

<banner>
	<div
		class="h-[18vh] md:h-[24vh] px-12 md:px-36 flex flex-col items-center md:items-start justify-center"
	>
		{#if header}
			<h1>{header}</h1>
		{/if}
	</div>
</banner>
