import React, { useContext, useEffect } from 'react'
import Context from '../context/Context'
import axios from 'axios'
import getData from '../api'

function Board(){
const { country, data, setData } = useContext(Context)

useEffect(() =>{
    const endpoint = 'https://coronavirus-19-api.herokuapp.com/countries'
    const getData = async (country) =>{
    await axios.get(`${endpoint}/${country}`).then(function (response) {
       // console.log(response);
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
}
    getData(country)
}, [])
// const data = getData(country)
return(
<div>
    {console.log(data)}
</div>
)
}

export default Board