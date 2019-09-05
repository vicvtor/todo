import React from 'react';
import './search-panel.css';

const SearchPanel = ({ onSearchTextChange }) => {

    const searchText = 'Type here';

    return <input 
        className="search-panel form-control mr-2" 
        placeholder={searchText} 
        onChange={ (e) => onSearchTextChange(e.target.value) }/>;
}

export default SearchPanel;