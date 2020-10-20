import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from './robots';
import Scroll from '../components/Scroll';
import './App.css';
class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:''
        }
    }
    componentDidMount(){
        // fetch()
        this.setState ({robots:robots})
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});   
    }
    render(){
        const filterRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='tc f1' >RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
                
            </div>
        );
    }
}
export default App;
