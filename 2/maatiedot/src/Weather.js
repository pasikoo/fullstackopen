import React from 'react';

const api_key = process.env.REACT_APP_API_KEY

export default (props) => {
  console.log(props);
  const { country: { name, capital, population, languages, flag } } = props;
  return (
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <h2>languages</h2>
      <ul>
        {languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <div><img style={{ width: 200 }} alt="flag" src={flag} /></div>
    </div>
  )
};
