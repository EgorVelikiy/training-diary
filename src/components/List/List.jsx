import Item from './Item/Item';
import './list.css'

export default function List({items, onDeleteClick}) {
    return (
        <ul>
            {items.map(item => {
                return (
                    <Item item = {item} onDeleteClick={onDeleteClick}/>
                )
            })}
        </ul>
    )
}