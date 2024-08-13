import { City, Country, Genre, type IArtist, Label, Icon } from '$lib/app'

export const ARTISTS: IArtist[] = [
	{
		name: 'Apellum',
		location: {
			city: City.Austin,
			country: Country.US,
		},
		bio: 'In the dynamic landscape of electronic music, Apellum stands as a techno producer and DJ deeply rooted in the vibrant Austin scene. With a diverse background as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the groovy, hypnotic, and raw essence of Berlin techno. Fans can look forward to his new EP, "Scenes of Water", which is an experience exploring the natural world as it features water, represented by the dub sounds in the music.',
		genres: [Genre.HypnoticTechno, Genre.RawTechno],
		links: [
			{
				url: 'https://instagram.com/apellum',
				icon: Icon.Instagram,
			},
		],
		labels: [Label.PerfectDark],
	},
]
