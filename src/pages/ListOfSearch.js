import ListLocation from "../components/ListLocation";
import ListCard from "../components/ListCard"
import ListEpisode from "../components/ListEpisode"
import { getSearchFromApi } from "../utils/Api";
import { searchInput } from "../utils/search";

const ListOfSearch = async (firstParam, secondParam) => {
  const res = await getSearchFromApi(searchInput[1], searchInput[2], searchInput[0]);
  if(searchInput[1] === 'character'){
    const data = res.map((element) => ({
      id: element.id,
        text: element.name,
        src: element.image,
        species: element.species,
        origin: element.origin.name,
        location: element.location.name,
      }))
      return ListCard(data)
  }else if(searchInput[1] === 'location') {
    const data = res.map((element) => ({
        text: element.name,
        type: element.type,
        dimension: element.dimension,
        residents: element.residents,
      }));
      return ListLocation(data);
  }else if(searchInput[1] === 'episode'){
    const data = res.map((element) => ({
        text: element.name,
        date: element.air_date,
        episode: element.episode,
      }))
      return ListEpisode(data)
    } 
  
};

export default ListOfSearch;
