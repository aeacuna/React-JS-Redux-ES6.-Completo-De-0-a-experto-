export default function TodoItem({item, onClickRemove}) {
    
    return (
        <div>
            {item}<button onClick={() => onClickRemove(item)}>x</button>
        </div>
    )
}