import { useEffect, useState } from 'react';
import './country-card.scss';
import axios from 'axios';

const COUNTRY_API = "https://restcountries.com/v3.1";

const client = axios.create({
    baseURL: COUNTRY_API
})

function CountryCard() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {


        const getCountries = async () => {
            try {
                let response = await client.get('all');
                setCountries(response.data)
            } catch (error) {
                console.log(error);
            }
            
        } 

        getCountries();
    })

    return (
        <div className='grid'>
            {countries.map((country: any) => (
                <div className='country' key={country.cca2}>
                    <img src={country.flags.svg} alt={country.flags.alt} />
                    <div>
                        <span>{country.name.common}</span>
                        <h2>{country.population}</h2>
                        <p>{country.region}</p>
                        <p>{country.capital}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CountryCard;