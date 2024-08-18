import { City, Country, Genre, type IArtist, Icon, Label } from '$lib/app'

export const ARTISTS: IArtist[] = [
	{
		name: 'Apellum',
		page: 'apellum',
		location: {
			city: City.Austin,
			country: Country.US,
		},
		bio:
			'In the dynamic landscape of electronic music, Apellum stands as a techno producer and DJ deeply rooted in the vibrant Austin scene. With a diverse background as a percussionist, audio engineer, and sound designer, Apellum artfully weaves together influences from a vast spectrum of musical genres, crafting a sonic tapestry that resonates closely with the groovy, hypnotic, and raw essence of Berlin techno.' +
			'\n\n' +
			"Within the techno scene, Apellum finds inspiration in many artists from multiple sub-genres, such as Rene Wise for raw and groovy techno, Ketch for dark and cerebral techno, and Wata Igarashi for hypnotic dub techno. Beyond the confines of techno, Apellum's creative canvas is painted with shades of jungle, trance, jazz, fusion, funk, and classical, among many others." +
			'\n\n' +
			'Apellum\'s studio has been a realm of exploration and creativity, where new sounds and music are discovered and crafted. Fans can look forward to his new EP, "Voyager", which is an experience exploring the vastness and hostility of space travel in a futuristic world.',
		images: ['apellum_01.jpg'],
		genres: [Genre.HypnoticTechno, Genre.RawTechno],
		links: [
			{
				url: 'https://instagram.com/apellum',
				icon: Icon.Instagram,
			},
			{
				url: 'https://facebook.com/apellummusic',
				icon: Icon.Facebook,
			},
			{
				url: 'https://ra.co/dj/apellum',
				icon: Icon.ResidentAdvisor,
			},
			{
				url: 'https://open.spotify.com/artist/2MOOYBdY5kjSsiTCugonnJ?si=pkeY-d3nRESBSXIjGSu-sg',
				icon: Icon.Spotify,
			},
			{
				url: 'https://music.apple.com/us/artist/apellum/1535711525',
				icon: Icon.AppleMusic,
			},
			{
				url: 'https://soundcloud.com/apellum',
				icon: Icon.SoundCloud,
			},
			{
				url: 'https://apellum.bandcamp.com',
				icon: Icon.Bandcamp,
			},
			{
				url: 'https://www.beatport.com/artist/apellum/1217073',
				icon: Icon.Beatport,
			},
		],
		labels: [Label.PerfectDark],
	},
	{
		name: 'Catao',
		page: 'catao',
		location: {
			city: City.Austin,
			country: Country.US,
		},
		bio:
			'Joao Pedro Catao is a DJ and producer from São Paulo, Brazil. While attending the University of Wisconsin, Catao forged his name within the club scene becoming well known throughout the midwest for being an electric performer, with masterful ability to ignite any crowd under hypnotizing control.' +
			'\n\n' +
			"Catao has provided support for major artists, some of which are ranked in DJ Mag's Top 100, including James Hype, ACraze, Valentino Khan, Cat Dealers, Snakehips, Adventure Club, and many more." +
			'\n\n' +
			"Catao's unique and versatile DJ style is derived from a mixture of flavors such as House, Hip-Hop, Disco, and a wide range of Latin sounds such as Brazilian Jazz, Reggaeton, and Baile Funk." +
			'\n\n' +
			'As a producer, Catao delivers some of the hottest mixes and songs within these genres, but specializes in the G-House genre that is quickly rising to global prominence.',
		images: ['catao_01.jpg'],
		genres: [Genre.DeepHouse, Genre.TechHouse],
		links: [
			{
				url: 'https://www.instagram.com/jcatao',
				icon: Icon.Instagram,
			},
			{
				url: 'https://www.facebook.com/cataoodt',
				icon: Icon.Facebook,
			},
			{
				url: 'https://soundcloud.com/cataoodt',
				icon: Icon.SoundCloud,
			},
		],
	},
	{
		name: 'Mellia',
		page: 'mellia',
		location: {
			city: City.Austin,
			country: Country.US,
		},
		bio: 'With the root “Mel” meaning both “honey” and “dark,” Mellia creates soundscapes that infuse sweet and melodic with heavy and deep for a journey through the light and the darkness. Her styles of house expand through deep, melodic, tech, progressive and organic plus techno, melodic techno and psy-trance.',
		images: ['mellia_01.jpg'],
		genres: [Genre.Hardgroove, Genre.Psytrance],
		links: [
			{
				url: 'https://www.instagram.com/melliamusic',
				icon: Icon.Instagram,
			},
			{
				url: 'https://ra.co/dj/mellia',
				icon: Icon.ResidentAdvisor,
			},
			{
				url: 'https://soundcloud.com/melliamusic',
				icon: Icon.SoundCloud,
			},
		],
	},
	{
		name: 'Natch Nadjafi',
		page: 'natch-nadjafi',
		location: {
			city: City.Austin,
			country: Country.US,
		},
		bio: 'Natch Nadjafi is an electronic rock and techno producer and performer known for his project Casualty Process. After gaining attention with home-recorded tracks in 2009 and being invited to SXSW, he based himself in Brooklyn, NY, following a national tour in 2011. Featured by NPR, WNYC, BBC, and MTV, Natch has also been part of the Voices of Revolution project, with his music featured in campaigns by Nokia and Amazon, and the film "Desert Dancer." With a career spanning two decades, Natch’s shift from electric rock to European-style techno has drawn attention from prominent European labels. His DJ sets blend raw, powerful beats with intricate grooves, reflecting his deep understanding of techno. Co-founder of KITCHEN TECHNO, Natch is committed to elevating Austin’s techno scene with community-focused events and a unique, immersive experience.',
		images: ['natch-nadjafi_01.jpg', 'natch-nadjafi_02.jpg'],
		genres: [Genre.HardTechno, Genre.Schranz],
		links: [
			{
				url: 'https://instagram.com/natchnadjafi',
				icon: Icon.Instagram,
			},
			{
				url: 'https://facebook.com/natchnadjafi',
				icon: Icon.Facebook,
			},
			{
				url: 'https://ra.co/dj/natchnadjafi',
				icon: Icon.ResidentAdvisor,
			},
			{
				url: 'https://open.spotify.com/artist/0JJfwYQvK1Th71ZCpC7GfA?si=4CKCZmE0SjOGNxkrpASp5g',
				icon: Icon.Spotify,
			},
			{
				url: 'https://music.apple.com/us/artist/natch-nadjafi/1112385645',
				icon: Icon.AppleMusic,
			},
			{
				url: 'https://soundcloud.com/natchnadjafi',
				icon: Icon.SoundCloud,
			},
			{
				url: 'https://natchnadjafi.bandcamp.com',
				icon: Icon.Bandcamp,
			},
			{
				url: 'https://www.beatport.com/artist/natch-nadjafi/1127825',
				icon: Icon.Beatport,
			},
		],
		labels: [
			Label.Anarkick,
			Label.BullyBeatz,
			Label.Fade2Black,
			Label.MusicForAliens,
			Label.SoundKleckseRecords,
		],
	},
]
