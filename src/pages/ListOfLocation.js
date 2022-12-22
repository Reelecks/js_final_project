import ListLocation from "../components/ListLocation";
import { getLocationFromApi } from "../utils/Api";

const ListOfLocation = async (firstParam, secondParam) => {
  const res = await getLocationFromApi(firstParam, secondParam);
  const data = res.map((element) => ({
    text: element.name,
    type: element.type,
    dimension: element.dimension,
    residents: element.residents,
  }));
  return ListLocation(data);
};

export default ListOfLocation;
