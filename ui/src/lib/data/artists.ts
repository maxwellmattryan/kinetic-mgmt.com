import { City, Country, Genre, type IArtist, Icon, Label } from '$lib/app'

export const ARTISTS: IArtist[] = [
	{
		name: 'Apellum',
		page: 'apellum',
		location: {
			city: City.Austin,
			country: Country.US,
		},
		bio: 'In the dynamic landscape of electronic music, Apellum stands as a techno producer and DJ deeply rooted in the vibrant Austin scene. With a diverse background as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the groovy, hypnotic, and raw essence of Berlin techno. Fans can look forward to his new EP, "Scenes of Water", which is an experience exploring the natural world as it features water, represented by the dub sounds in the music.',
		images: ['apellum_01.jpg'],
		genres: [Genre.HypnoticTechno, Genre.RawTechno],
		links: [
			{
				url: 'https://instagram.com/apellum',
				icon: Icon.Instagram,
			},
		],
		labels: [Label.PerfectDark],
	},
	{
		name: 'Natch Nadjafi',
		page: 'natch-nadjafi',
		location: {
			city: City.Austin,
			country: Country.US,
		},
		bio: 'Natch Nadjafi, co-founder of KITCHEN TECHNO, is an electronic rock and techno music producer renowned for his project, Casualty Process. Transitioning from rock to European-style techno, he garnered attention from prestigious German, Italian, and Spanish labels. His two-decade career embodies boundless creativity and unwavering passion.',
		images: ['natch-nadjafi_01.jpg'],
		genres: [Genre.HardTechno, Genre.Schranz],
		links: [
			{
				url: 'https://instagram.com/natchnadjafi',
				icon: Icon.Instagram,
			},
		],
		labels: [Label.BullyBeatz, Label.SoundKleckseRecords],
	},
]
