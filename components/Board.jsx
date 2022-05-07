import React, { useContext, useEffect } from 'react'
import Context from '../context/Context'
import axios from 'axios'
import BoardCard from './BoardCard'
import getData from '../api'

function Board(){
const { country, data, setData } = useContext(Context)

useEffect(() =>{
    const endpoint = 'https://coronavirus-19-api.herokuapp.com/countries'
    const getData = async (country) =>{
    await axios.get(`${endpoint}/${country}`).then(function (response) {
        setData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
}
    getData(country)
}, [])


return(
<div>
    <BoardCard name='Total de casos' info={data.cases}/>
    <BoardCard name='Obitos Hoje' info={data.todayDeaths}/>
    <BoardCard name='Casos Hoje' info={data.todayCases}/>
    <BoardCard name='Total de Mortos' info={data.deaths}/>
    <BoardCard name='Total de Recuperados' info={data.recovered}/>
</div>
)
}

export default Board