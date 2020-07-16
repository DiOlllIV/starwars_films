import React, { useState, useEffect } from "react";
import { fetchingData } from '../../addFunctions';
import Characters from "./Characters";

const Main = () => {
    const [filmsData, setFilmsData] = useState(false);

    useEffect(() => {
        if (!filmsData) 
            fetchingData("https://swapi.dev/api/films/")
            .then(data => setFilmsData(data.results));
    })

    console.log(filmsData);
    if (!filmsData)
        return null;
    return (
        <ul className="films-list">
            {filmsData.map(item => 
                <li className="films-list__episodes"
                    key={item.episode_id}
                >
                    <span className="film-item film-item__epsd">Episode: {item.episode_id}</span>
                    <span className="film-item film-item__name">{item.title}</span>
                    <span className="film-item film-item__date">{item.release_date}</span>
                    <span className="film-item film-item__directr">{item.director}</span>
                    <span className="film-item film-item__crawl">{item.opening_crawl}</span>
                    <Characters />
                </li>
            )}
        </ul>
    )
}
export default Main;