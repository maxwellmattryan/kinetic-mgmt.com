<script lang="ts">
	export let header: string | undefined
</script>

<banner>
	<div class="h-[24vh] px-36 flex flex-col justify-center">
		{#if header}
			<h1>{header}</h1>
		{/if}
	</div>
</banner>
