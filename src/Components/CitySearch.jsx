import React, { useState } from 'react';

import magnifierIcon from './imgs/magnifier.png'

function CitySearch(props) {
    const [input, setInput] = useState({ name: "" });

    const handleSubmit = e => {
        e.preventDefault();
        props.searchCity(input);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="FormContainer">
                <button className="MagnifierIcon" type="submit">
                    <img src={magnifierIcon} alt="" />
                </button>
                <input type="text" placeholder="Search City"
                    onInput={e => setInput({ name: e.target.value })} />
                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default CitySearch;
