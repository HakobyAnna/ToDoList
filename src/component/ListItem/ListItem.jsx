import './ListItem.css'

function ListItem(props) {
    return (
        <div className='list-container'>
            <input type='checkbox'/>
            <p  className="text">{props.text}</p>
        </div>
    )
}

export default ListItem;