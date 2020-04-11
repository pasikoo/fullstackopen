import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';
import CountryList from './CountryList';

const urlCountries = 'https://restcountries.eu/rest/v2/all';

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  useEffect(() => {
    axios
      .get(urlCountries)
      .then(countries => setCountries(countries.data))
  }, [])

  const filterCountriesHandler = event => {
    const newFilteredCountries = countries.filter(country => {
      const q = event.target.value.toLowerCase()
      return country.name.toLowerCase().includes(q);
    })
    setFilteredCountries(newFilteredCountries)
  }

  return (
    <div>
      find countries <input onChange={filterCountriesHandler} />
      {
        filteredCountries.length > 10 ? <div>Too many matches, specify another filter</div>
          : filteredCountries.length > 1 ? <CountryList filteredCountries={filteredCountries} setFilteredCountries={setFilteredCountries} />
            : filteredCountries[0] ? <Country country={filteredCountries[0]} />
              : null
      }
    </div>
  );
}

export default App;
