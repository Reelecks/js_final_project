import ListEpisode from "../components/ListEpisode"
import { getEpisodeFromApi } from "../utils/Api"

const ListOfEpisode = async (firstParam, secondParam) => {
  const res = await getEpisodeFromApi()
  const data = res.map((element) => ({
    text: element.name,
    date: element.air_date,
    episode: element.episode,
  }))
  return ListEpisode(data)
}

export default ListOfEpisode