const Button = ( {type, text, clickHandler} ) => {
    return (
        <button className="{type}" onClick={() => {
            console.log("on click en el button")
            clickHandler(text)     
        }}>
            <span >{text}</span>
        </button>
    )
}

export default Button