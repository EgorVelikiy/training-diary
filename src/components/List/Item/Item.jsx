import { v4 } from 'uuid'
import './item.css'

export default function Item({item, onDeleteClick}) {
    return (
        <li className="list-item" id={item.id}>
            <span>{item.date}</span>
            <span>{item.steps}</span>
            <div className="toolbar">
                <button className="delete" type="button" onClick={onDeleteClick}>✘</button>
            </div>
        </li>
    )
}