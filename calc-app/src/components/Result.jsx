import PropTypes from 'prop-types'

//const Result = (props) => {//objeto por parametros
const Result = ({ value }) => (//Destructuring directo en los parametros
    //const { value } = props;//destructuring dentro de la funcion
    <div className="result">
        {value}
    </div>
)

Result.propTypes = {
    value : PropTypes.string.isRequired
}

Result.defaultProps = {
    value : "0"
}

export default Result