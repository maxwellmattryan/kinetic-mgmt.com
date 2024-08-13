import { City, Country, Genre, Label, Icon } from './enums'

export interface IArtist {
	name: string
	location: IArtistLocation
	bio: string
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
