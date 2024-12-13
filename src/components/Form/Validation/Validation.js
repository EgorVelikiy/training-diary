import { v4 } from "uuid"

export default function validation(data) {
    const { date, steps } = data
    
    const year = date.split('-')[0]

    if (year > new Date().getFullYear()) {
        throw new Error('Вы из будущего ?')
    }

    if (steps > 100) {
        throw new Error('Кажется кто-то врёт))')
    }
    
    const id = v4()
    return { id, date, steps}
}