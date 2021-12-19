import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            term: "",
        }
    }

    onInputValue = (e) =>{
        const {onUpdateData} = this.props;
        const vlaueOfInput = e.target.value;
        this.setState({
            term: vlaueOfInput,
        });
        onUpdateData(vlaueOfInput);
    }

    render(){
       return(
            <input type="text"
                    onChange={this.onInputValue}
                    value={this.state.term}
                    className="form-control search-input"
                    placeholder="Найти сотрудника"/>
        ) 
    }
    
}

export default SearchPanel;