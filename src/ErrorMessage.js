import React from "react"
import PropTypes from "prop-types"

const ErrorMessage = (props) => {
    const {show, message, username} = props;
    const returnElement = (show) ? (<label 
                className="error">{username}{message}</label>) : '';

    return returnElement;
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default ErrorMessage