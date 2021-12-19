import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css'

const EmployersList = ({data , onDelete, onToogleProp}) => {
    const employerListItems = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <EmployersListItem 
                key={id} 
                {...itemProps} 
                onDelete={() => onDelete(id)} 
                toogleProp={(e) => onToogleProp(id, e.currentTarget.getAttribute('data-prop'))}/>
        )
    });

    return(
        <ul className="app-list list-group">
            {employerListItems}
        </ul>
    )
}

export default EmployersList;


