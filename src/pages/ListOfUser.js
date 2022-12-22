import ListCard from "../components/ListCard"
import { getUserFromApi } from "../utils/Api"

const ListOfUser = async (firstParam, secondParam) => {
  const res = await getUserFromApi()
  const data = res.map((element) => ({
    text: element.name,
    src: element.image,
    species: element.species,
    origin: element.origin.name,
    location: element.location.name,
  }))
  return ListCard(data)
}

export default ListOfUser