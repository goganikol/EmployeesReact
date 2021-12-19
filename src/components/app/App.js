import { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name:"John Smith" ,salary: 800,increase:false ,like:false ,id:1},
                {name:"Jack Johnson" ,salary:100,increase:false ,like:false ,id:2 },
                {name:"James Bond" ,salary: 700,increase:false ,like:false ,id:3},
                {name:"Jim Croce" ,salary:60,increase:false ,like:false ,id:4 },
                {name:"Kim Yen" ,salary:1500,increase:false ,like:false ,id:5 },
                {name:"Oleg Kord ",salary:200,increase:false ,like:false ,id:6 },
                {name:"Igor Nikolaev" ,salary: 2500,increase:false ,like:false ,id:7 }
            ],
            term:"",
            filter: 'all',
        }
        this.quantity = 8;
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToogleProp = (id,prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
        console.log(`increased ${id} element`);
    }


    addElement = (name,salary) => {
        const newElement = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.quantity++
        }

        this.setState(({data}) => {
            const newData = [...data,newElement];
            return{
                data: newData,
            }
        })
    }

    searchEmp = (term, items) => {
        if(term.length === 0 ){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateData = (inputValue) => {
        this.setState({
                term: inputValue,
        })
    }

    filterBtns = (arr,filter) => {
        switch(filter){
            case 'all':
                return arr;
            case 'incr':
                return arr.filter(item => {
                    return item.increase === true
                });
            case 'moreThan1000':
                return arr.filter(item => {
                    return item.salary > 1000
                });
            default:
                return arr;
        }
    }

    onFilterSelect = (name) => {
        this.setState({
            filter: name,
        });
    }

    render(){
        const {data,term,filter} = this.state;
        let increasedEmployees = data.filter(item => item.increase).length;
        const visibleData = this.filterBtns(this.searchEmp(term,data),filter);

        return(
            <div className="app">
                <AppHeader quantity={data.length} increased={increasedEmployees}/>

                <div className="search-panel">
                    <SearchPanel onUpdateData={this.onUpdateData}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployersList 
                    data={visibleData} 
                    onDelete={id => this.onDelete(id)}
                    onToogleProp={this.onToogleProp}/>
                <EmployersAddForm onAdd={this.addElement}/>
            </div>
        )
    }

}

export default App;