import { useEffect, useState } from 'react';
import './country-card.scss';
import axios from 'axios';

const COUNTRY_API = "https://restcountries.com/v3.1";

const client = axios.create({
    baseURL: COUNTRY_API
})

function CountryCard() {

    const [countries, setCountries] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const response = await client.get('all');
                setCountries(response.data);
            } catch (err) {
                setError('Failed to fetch countries');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        
        getCountries();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (countries.length === 0) return <p>No countries found</p>;

    return countries && (
        <div className='grid'>
            {countries.map((country: any) =>{ 
                const capitals: string[] = Array.isArray(country.capital) ? country.capital : ['--'];
                let capital: string = capitals.join("; ");                

                return (
                    <div className='country' key={country.cca2}>
                        <img src={country.flags.svg} alt={country.flags.alt} />
                        <div>
                            <h2>{country.name.common}</h2>
                            <span>Population: <p>{country.population}</p></span>
                            <span>Region: <p>{country.region}</p></span>
                            <span>Capital: <p>{ capital }</p></span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountryCard;