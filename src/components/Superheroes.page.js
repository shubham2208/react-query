import { useState, useEffect } from "react"
import axios from "axios";

export const SuperheroesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/superhero').then((res) => {
            setData(res.data);
            setIsLoading(false);
        })
    },[])

    if(isLoading){
        return(
            <div>Loading ...</div>
        )
    }
    return(
        <>
            <h2>SuperHero Page</h2>
            {data.map((hero) => {
                return <div key={hero.id}>{hero.name}</div>
            })}
        </>
    )
}