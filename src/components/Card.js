import React from 'react'

const Card = ({ title, image, url }) => {
    return (
        <div className="card text-center bg-dark">
            <img src={image} alt={image}/>
            <div className="card-body text-light">
                <h4 className="card-title"> {title} </h4>
                    <p className="card-text text-secondary">
                        Duis sunt est reprehenderit deserunt est 
                        deserunt cillum adipisicing duis. Sunt anim 
                        quis occaecat eiusmod cupidatat in sunt. Duis 
                        excepteur duis mollit ex aute amet elit cupidatat 
                        velit nulla sunt officia.
                    </p>
                    <a href={url} className="btn btn-outline-secondary" target="_blank">
                        Ir al sitio
                    </a>
            </div>
        </div>
    )
}

export default Card
