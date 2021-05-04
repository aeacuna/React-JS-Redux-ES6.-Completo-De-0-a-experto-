import React, { useState, useCallback } from 'react'

const TodoInput = () => {
    const [value, setValue] = useState('')

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault() 
            // Evento que permite agregar el item (value)
            // addItem(value) 

            setValue('')
        },
        [setValue],
    )    

    return (
        <form onSubmit={onSubmit}>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button>Agregar item</button>
        </form>
    )
}

export default TodoInput