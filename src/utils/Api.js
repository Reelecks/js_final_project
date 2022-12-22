
export const getUserFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/character')
  const res = await req.json()

  return res.results
}

export const getSearchFromApi = async (type, search, param) => {
  const req = await fetch(`https://rickandmortyapi.com/api/${type}/?${search}=${param}`)
  const res = await req.json()
    return res.results
}

export const getLocationFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/location')
  const res = await req.json()

  return res.results
}

export const getEpisodeFromApi = async () => {
  const req = await fetch('https://rickandmortyapi.com/api/episode')
  const res = await req.json()

  return res.results
}

