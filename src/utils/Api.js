
export const getUserFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character')
  const res = await req.json()

  return res.results
}

export const getOneUserFromApi = async (userid) => {
  const req = await fetch(`https://rickandmortyapi.com/api/character/${userid}`)
  const res = await req.json()
  return res
}

export const getLocationFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/location')
  const res = await req.json()

  return res.results
}

export const getOneLocationFromApi = async (userid) => {
  const req = await fetch(`https://rickandmortyapi.com/api/location/${userid}`)
  const res = await req.json()
  return res
}

export const getEpisodeFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/episode')
  const res = await req.json()

  return res.results
}

export const getOneEpisodeFromApi = async (userid) => {
  const req = await fetch(`https://rickandmortyapi.com/api/episode/${userid}`)
  const res = await req.json()
  return res
}


