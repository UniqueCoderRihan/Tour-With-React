import React, { useEffect, useState } from 'react';
import Country from './componets/country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountris] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountris(data))
    }, [])
    return (
        <div>
            <h2>Countris: {countries.length}</h2>
            <div className='countries-container'>
            {
                countries.map(country => <Country name={country.name.common} area={country.area} flag={country.flags.png} key ={country.cca3}></Country>)
                
            }
            </div>
        </div>
    );
};
export default Countries;