import countries from '../data/countries'
import Image from 'next/image'
import React, { useContext } from 'react'
import Context from '../context/Context'

function Header(){
    const { setCountry } = useContext(Context)
    return(
    <div className="container bg-light">
        <h3>Painel de Monitoramento da Covid-19</h3>
        <select onChange={({ target: { value } }) => setCountry(value)}>
            {countries.map((c) => <option key={c.value} value={c.value}>
                {c.name}
             </option>)}
        </select>
    </div>)
}

export default Header