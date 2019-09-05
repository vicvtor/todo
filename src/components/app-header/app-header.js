import React from 'react';
import './app-header.css';

const AppHeader = ({ done, unDone }) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo list</h1>
            <span className="ml-auto align-self-center text-secondary">{unDone} more to do, {done} done</span>
        </div>
    
    );
}

export default AppHeader;