import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';

import './todo-list.css';

export default class TodoList extends Component {

    render() {

        const { todos, onItemRemove, onToggleImportant, onToggleDone } = this.props;

        const elements = todos.map(t => {
            const { id, ...others  } = t;
            return (<li key={id} className="list-group-item" >
                        <TodoListItem 
                            { ...others } 
                            onItemRemove={ () => onItemRemove(id) }
                            onToggleImportant={ () => onToggleImportant(id) }
                            onToggleDone={ () => onToggleDone(id) }
                        />
                    </li>);
        });
    
        return (
            <ul className="todo-list list-group" >
                { elements }
            </ul>
        );
    }

}