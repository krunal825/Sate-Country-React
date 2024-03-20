import React, { useState, useEffect } from 'react';
import { getCountries } from './countries';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

const CountrySelector = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countryList = await getCountries();
      setCountries(countryList);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const selectedCountryData = countries.find(country => country.name === selectedCountry);
    if (selectedCountryData) {
      setStates(selectedCountryData.states);
    }
  }, [selectedCountry, countries]);

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <List>
          {countries.map((country, index) => (
            <ListItem
              key={index}
              button
              selected={country.name === selectedCountry}
              onClick={() => handleCountryClick(country.name)}
            >
              <ListItemText primary={country.name} />
            </ListItem>
          ))}
        </List>
      </div>
      <Divider orientation="vertical" flexItem />
      <div style={{ flex: '1' }}>
        <List>
          {states.map((state, index) => (
            <ListItem key={index}>
              <ListItemText primary={state} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default CountrySelector;
