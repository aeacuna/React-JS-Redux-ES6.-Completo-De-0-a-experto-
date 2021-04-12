import PropTypes from 'prop-types'

//const Result = (props) => {//objeto por parametros
const Result = ({ value }) => {//Destructuring directo en los parametros
    console.log("Renderizacion Result", value);
    //const { value } = props;//destructuring dentro de la funcion
    return (
        <div className="result">
            {value}
        </div>
    )
}

Result.propTypes = {
    value : PropTypes.string.isRequired
}

Result.defaultProptypes = {
    value : "0"
}

export default Result