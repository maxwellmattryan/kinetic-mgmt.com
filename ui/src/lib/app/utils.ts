import { Color, Icon } from './enums'

export function getColorHexFromIcon(icon: Icon): string {
	switch (icon) {
		case Icon.AppleMusic:
			return '#f9465e'
		case Icon.Bandcamp:
			return '#73b7c9'
		case Icon.Beatport:
			return '#01ff95'
		case Icon.Facebook:
			return '#1877f2'
		case Icon.Instagram:
			return '#d62976'
		case Icon.ResidentAdvisor:
			return '#b8de4b'
		case Icon.SoundCloud:
			return '#ffa53c'
		case Icon.Spotify:
			return '#1db954'
		case Icon.YouTube:
			return '#ff2828'
		default:
			return Color.Zinc200 as string
	}
}
