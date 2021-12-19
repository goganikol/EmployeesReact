import './app-filter.css'

const AppFilter = (props) => {
    const btns = [
        {name:"all" ,text:"Все сотрудники" },
        {name:"incr",text:"На повышение" },
        {name:"moreThan1000",text:"З/П больше 1000$" },
    ]

    const buttons = btns.map(({name,text}) => {
        const active = props.filter === name;
        const classes = active?"btn-light" : "btn-outline-light";
        return(
            <button 
                type="button" 
                key={name} 
                className={`btn ${classes}`}
                onClick={() => props.onFilterSelect(name)}>
                {text}
            </button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>        
    )

}

export default AppFilter;