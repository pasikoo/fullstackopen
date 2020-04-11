import React from 'react';

export default ({ filteredCountries, setFilteredCountries }) => {

  return filteredCountries.map(
    (country, i) =>
      <div key={country.name}>{country.name}
        <button onClick={() => setFilteredCountries([filteredCountries[i]])}> 
          show
        </button>
      </div>
  )
};
