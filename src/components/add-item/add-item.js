import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {
    constructor() {
        super();

        this.state = {
            label : ''
        }

        this.onLabelChange = (e) => {
            this.setState({
                label : e.target.value
            });
        }

        this.onItemAdd = (e) => {
            this.props.onAddItem(this.state.label);
            this.setState({
                label: ''
            });
            e.preventDefault();
        }

    }

    render() {
        return (
            <form className="item-add d-flex" onSubmit={ this.onItemAdd }>
                <input type="text" 
                    placeholder="New item name..." 
                    className="form-control mr-2"
                    onChange={ this.onLabelChange }
                    value={ this.state.label }/>
                <button className="btn btn-primary">Add</button>
            </form>
        );
    }
}