import Header from './Header'
import React, { useContext } from 'react'
import Context from '../context/Context'
import Board from './Board'

function Main() {
    const { country } = useContext(Context)

    return(
        <div className="pt-3 main">
            <Header /> 
            <Board />
        </div>
    )
}

export default Main