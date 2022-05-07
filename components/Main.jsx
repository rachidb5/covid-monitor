import Header from './Header'
import React, { useContext } from 'react'
import Context from '../context/Context'

function Main() {
    const { country } = useContext(Context)

    return(
        <div className="pt-3 main">
            <Header /> 
        </div>
    )
}

export default Main