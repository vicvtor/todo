import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {

    constructor() {
        super();

        this.idCounter = 0;

        this.state = {
            todoData : [
                this.newItem("Make some noise"),
                this.newItem("Build react app"),
                this.newItem("Have a fun")
            ],
            searchText : '',
            section : 'all'
        }

        this.onRemoveItem = (itemId) => {
            this.setState(({ todoData }) => {
                const idx = todoData.findIndex(el => el.id === itemId);
                const newData = [...todoData.slice(0,idx), ...todoData.slice(idx+1)];
                return {
                    todoData: newData
                }
            });
        }

        this.onAddItem = (label) => {
            this.setState(({ todoData }) => {
                return {
                    todoData: [...todoData, this.newItem(label)]
                }
            });
        }

        this.onToggleImportant = (itemId) => {
            this.toggleProperty(itemId, 'important');
        }

        this.onToggleDone = (itemId) => {
            this.toggleProperty(itemId, 'done');
        }

        this.onSearchTextChange = (text) => {
            this.setState({
                searchText : text
            });
        }

        this.onSectionChange = (section) => {
            this.setState({
                section : section
            });
        }

    }

    toggleProperty(id, propName) {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id);
            const newElement = { ...todoData[idx], [propName]: !todoData[idx][propName] }
            const newData = [
                ...todoData.slice(0,idx), 
                newElement,
                ...todoData.slice(idx+1)];
            return {
                todoData: newData
            }
        });
    }

    newItem(label){
        return { 
            label: label, 
            important: false, 
            done: false,
            id: this.idCounter++ 
        };
    }

    search(arr, searchText) {
        if (!searchText) {
            return arr;
        }
        return arr.filter(el => el.label.toLowerCase().includes(searchText.toLowerCase()));
    }

    filter(arr, status){
        switch (status) {
            case 'active':
                return arr.filter(el => !el.done); 
            case 'done':
                return arr.filter(el => el.done);
            default:
                return arr;
        }
    }

    render() {
        const { searchText, section, todoData } = this.state;

        const done = todoData.filter(el => el.done).length;
        const unDone = todoData.length - done;

        const filtered = this.search(this.filter(todoData, section), searchText);

        return (
            <div className="app">
                <AppHeader done={ done } unDone={ unDone } />
                <div className="d-flex  flex-row">
                    <SearchPanel onSearchTextChange={ this.onSearchTextChange }/> 
                    <ItemStatusFilter onSectionChange={ this.onSectionChange } section={ section }/>
                </div>
                <TodoList 
                    todos={filtered} 
                    onItemRemove={ this.onRemoveItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone }
                />
                <AddItem onAddItem={ this.onAddItem }/>
            </div>
        );
    }
}