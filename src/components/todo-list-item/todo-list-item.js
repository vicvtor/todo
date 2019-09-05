import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onItemRemove, onToggleDone, onToggleImportant, done, important } = this.props;

        let classNames = 'todo-list-item d-flex';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
    
        return (
            <div className={ classNames }>
                <span  className="todo-list-item-label" onClick={ onToggleDone }>{ label }</span>
                <div className="ml-auto">
                    <button 
                        className="btn btn-outline-danger fa fa-trash-o mx-2"
                        onClick={ onItemRemove }>
                    </button>
                    <button 
                        className="btn btn-outline-success fa fa-exclamation" 
                        onClick={ onToggleImportant }>
                    </button>
                </div>
            </div>
    
        );
    }

};