import axios from 'axios'

const endpoint = 'https://coronavirus-19-api.herokuapp.com/countries'
const getData = async (country) =>{
    await axios.get(`${endpoint}/${country}`).then(function (response) {
       // console.log(response);
        return response
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}

export default getData