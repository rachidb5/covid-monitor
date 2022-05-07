import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [country, setCountry] = useState('');
    const [data, setData] = useState('');
    const context = {
      country,
      setCountry,
      data,
      setData
    };
    return (
        <Context.Provider value={ context }>
          { children }
        </Context.Provider>
      );
}

export default Provider