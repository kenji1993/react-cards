import React from 'react'
import  cassette  from '../assets/img/cassette-recortado.jpg'

const Card = () => {
    return (
        <div className="card text-center bg-dark">
            <img src={cassette} alt="cassette"/>
            <div className="card-body text-light">
                <h4 className="card-title"> Card </h4>
                    <p className="card-text text-secondary">
                        Duis sunt est reprehenderit deserunt est 
                        deserunt cillum adipisicing duis. Sunt anim 
                        quis occaecat eiusmod cupidatat in sunt. Duis 
                        excepteur duis mollit ex aute amet elit cupidatat 
                        velit nulla sunt officia.
                    </p>
                    <a href="#" className="btn btn-outline-secondary">
                        Go to this website
                    </a>
            </div>
        </div>
    )
}

export default Card
