<script lang="ts">
	import { Color, Icon } from '$lib/app'

	import AppleMusic from '$lib/assets/icons/apple-music.svg?raw'
	import Bandcamp from '$lib/assets/icons/bandcamp.svg?raw'
	import Beatport from '$lib/assets/icons/beatport.svg?raw'
	import Facebook from '$lib/assets/icons/facebook.svg?raw'
	import Genre from '$lib/assets/icons/genre.svg?raw'
	import Instagram from '$lib/assets/icons/instagram.svg?raw'
	import Label from '$lib/assets/icons/label.svg?raw'
	import Location from '$lib/assets/icons/location.svg?raw'
	import ResidentAdvisor from '$lib/assets/icons/resident-advisor.svg?raw'
	import SoundCloud from '$lib/assets/icons/soundcloud.svg?raw'
	import Spotify from '$lib/assets/icons/spotify.svg?raw'
	import YouTube from '$lib/assets/icons/youtube.svg?raw'

	const ICONS: Record<Icon, unknown> = {
		[Icon.AppleMusic]: AppleMusic,
		[Icon.Bandcamp]: Bandcamp,
		[Icon.Beatport]: Beatport,
		[Icon.Facebook]: Facebook,
		[Icon.Genre]: Genre,
		[Icon.Instagram]: Instagram,
		[Icon.Label]: Label,
		[Icon.Location]: Location,
		[Icon.ResidentAdvisor]: ResidentAdvisor,
		[Icon.SoundCloud]: SoundCloud,
		[Icon.Spotify]: Spotify,
		[Icon.YouTube]: YouTube,
	}

	export let icon: Icon | undefined
	export let size: 'sm' | 'md' | 'lg' = 'md'
	export let color: Color = Color.Zinc300

	function getPixelsFromSize(size: string): number {
		switch (size) {
			case 'sm':
				return 16
			case 'md':
				return 24
			case 'lg':
				return 32
			default:
				return 24
		}
	}
</script>

{#if icon && icon in ICONS}
	<div style="--size: {getPixelsFromSize(size)}px; --color: {color};">
		<!-- eslint-disable svelte/no-at-html-tags -->
		{@html ICONS[icon]}
	</div>
{/if}

<style>
	div :global(svg) {
		width: var(--size);
		height: var(--size);
		fill: var(--color);
	}
</style>
