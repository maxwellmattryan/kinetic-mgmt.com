import { City, Country, Genre, Label, Icon } from './enums'

export interface IArtist {
	name: string
	page: string
	location: IArtistLocation
	bio: string
	images: string[]
	genres: Genre[]
	links: ILink[]
	labels?: Label[]
}

export interface IArtistLocation {
	city: City
	country: Country
}

export interface ILink {
	url: string
	icon?: Icon
}
