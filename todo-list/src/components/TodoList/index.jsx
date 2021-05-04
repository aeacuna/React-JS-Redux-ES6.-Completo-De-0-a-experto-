import React, { useCallback } from 'react'
import TodoItem from '../TodoItem'

const TodoList  = () => {
    const list = [{item : 'uno'}, {item : 'dos'}, {item : 'tres'},]

    const onClickRemove = useCallback((item) => {
        //ACCION DE ELIMINAR UN ITEM
    }, [])
    return (
        <div>
             {list && list.map(i => <TodoItem key={i.item} {...i} onClickRemove={onClickRemove}></TodoItem>)}
        </div>
    )
}

export default TodoList

