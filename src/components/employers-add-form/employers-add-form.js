import {Component} from 'react';

import './employers-add-form.css'

class EmployersAddForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value);
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name,salary} = this.state;
        const{onAdd} = this.props;

        if(name.length > 4 && salary > 49){
            onAdd(name,salary)
        }else{
            alert("name should be more than 4 symbols length / surname should be more than 49$")
        }

        this.setState({
            name:'',
            salary: ''
        })
    }


    render(){
        const{name,salary} = this.state;

       return(
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text" name="name" onChange={this.onValueChange} value={name} className="form-control new-post-label" placeholder="Как его зовут?" />
                <input type="number" name="salary" onChange={this.onValueChange} value={salary} className="form-control new-post-label" placeholder="З/П в $?" />
                <button type="submit" className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
       )
    }
    
}

export default EmployersAddForm;