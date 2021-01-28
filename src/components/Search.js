import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return ( 
        <div className="search-box">
            <form action="">
                <input 
                    type="text" 
                    className="search-input"
                    placeholder="Search planet name"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </div>
     );
}
 
export default Search;