import React, { Component } from 'react';
import './item-status-filter';

export default class ItemStatusFilter extends Component {

    constructor() {
        super();

        this.buttons = [
            {key: 'all', label: 'All'},
            {key: 'active', label: 'Active'},
            {key: 'done', label: 'Done'},
        ]

        this.onSectionChanged = (section) => {
            this.props.onSectionChange(section);
            this.setState({
                section: section
            })
        }
    }

    render() {
        const buttons = this.buttons.map(b => {
            const isActive = this.props.section === b.key;
            return (
                <button 
                    type="button" 
                    className={ `btn ${ isActive ? 'btn-info active' : 'btn-outline-secondary'}` }
                    key={ b.key }
                    onClick={ () => this.onSectionChanged(b.key) }>
                    {b.label}
                </button>
                )
            }
        );

        return (
            <div className="item-status-filter btn-group">
                {buttons}
            </div>
        );
    }
}