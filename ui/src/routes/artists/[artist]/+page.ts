import { error } from '@sveltejs/kit'

import type { IArtist } from '$lib/app'
import { ARTISTS } from '$lib/data'

import type { PageLoadEvent } from './$types'

export function load(event: PageLoadEvent): IArtist {
	const artist = ARTISTS.find((a) => a.page === event.params.artist)
	if (artist) {
		return artist
	} else {
		error(404)
	}
}
