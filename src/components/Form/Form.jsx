import { useState } from "react"
import List from '../List/List'
import validation from './Validation/Validation.js'
import timeCompare from './Validation/timeCompare.js'
import './form.css'

export default function Form() {
    const [form, setForm] = useState({ date: '', steps: '' })
    const [list, setList] = useState([])



    const onSubmitForm = (e) => {
        e.preventDefault();

        let newList = [];

        const { target } = e;
        const formData = new FormData(target)
        const data = Object.fromEntries(formData)

        let valid_values;

        try {
            valid_values = validation(data)
        } catch (e) {
            alert(e.message)
            return
        }

        const index = list.findIndex((item) => timeCompare(item.date) <= timeCompare(valid_values.date))

        if (index !== -1) {
            newList = list.concat([valid_values])
            newList = newList.sort((a, b) => timeCompare(a) - timeCompare(b))
        } else {
            newList = list.concat([valid_values])
        }

        setForm({ date: '', steps: '' })
        setList(newList)
    }

    const onInputHandle = (e) => {
        const { name, value} = e.target

        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    const deleteClick = (e) => {
        const target = e.target.closest('li')
        
        const id = target.id
        
        const newList = list.filter(item => item.id !== id)

        setList(newList)
    }

    return (
        <div className="container-main">
            <div className="input-titles">
                <span className="title">Дата (ДД.ММ.ГГ)</span>
                <span className="title">Пройдено км</span>
            </div>
            <form className="form" onSubmit={onSubmitForm}>
                <input className="date-input" type="date" name="date" value={form.date} onChange={onInputHandle} required/>
                <input className="steps-input" type="number" name="steps" value={form.steps} onChange={onInputHandle} required/>
                <button className="btn-submit" type="submit">OK</button>
            </form>
            <div className="list-container">
                <div className="list-headers">
                    <span>Дата (ДД.ММ.ГГ)</span>
                    <span>Пройдено км</span>
                    <span>Действия</span>
                </div>
                <List items={list} onDeleteClick={deleteClick}/>
            </div>
        </div>
    )
}