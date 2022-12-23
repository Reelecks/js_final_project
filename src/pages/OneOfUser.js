import OneUser from '../components/OneUser'
import {getOneUserFromApi} from '../utils/Api'
import {valueId} from '../utils/showOneUser'

const OneOfUser = async (firstParam, secondParam) => {
    const res = await getOneUserFromApi(valueId);
    console.log(valueId)
    console.log(res.name)
      const data = ({
          text: res.name,
          src: res.image,
          species: res.species,
          gender: res.gender,
          origin: res.origin.name,
          location: res.location.name,
        })
        return OneUser(data)
    }  
  export default OneOfUser;
  
