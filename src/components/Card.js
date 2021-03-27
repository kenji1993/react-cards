import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ title, image, url, text }) => {
    return (
        <div className="card text-center bg-dark">
            <div className="overflow">
                <img src={image} alt={image} className="card-img-top"/>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title"> {title} </h4>
                    <p className="card-text text-secondary">
                       {text}
                    </p>
                    <a href={url} className="btn btn-outline-secondary" target="_blank">
                        Ir al sitio
                    </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
}

export default Card
