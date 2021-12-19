import './app-header.css';

const AppHeader = (props) => {
    const {quantity,increased} = props;

    return(
        <div className="app-header">
            <h1>Учёт сотрудников компании N </h1>
            <h2>Всего сотрудников: {quantity}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppHeader;