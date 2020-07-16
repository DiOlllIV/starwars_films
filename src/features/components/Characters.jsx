import React, { useState, useEffect } from 'react';
import { fetchingData } from '../../addFunctions';
 
const Characters = () => {
    const [charactersData, setData] = useState(false);

    useEffect(() => {
        if(!charactersData)
        fetchingData("https://swapi.dev/api/people/")
        .then(data => setData(data.results));
    });

    console.log(charactersData);
    if (!charactersData)
        return null;
    return (
        <div >
            <ul>
                {charactersData.map(item =>
                    <li> 
                        <span>name:{item.name}</span>
                        <span>birth year:{item.birth_year}</span>
                        <span>gander:{item.gander}</span>
                        <span>height:{item.height}</span>
                        <span>skin color:{item.skin_color}</span>
                        <span>eye color:{item.eye_color}</span>
                        <span>mass:{item.mass}</span>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Characters;