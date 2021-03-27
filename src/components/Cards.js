import React from 'react'
import Card from './Card'

import  space  from '../assets/img/space-invader-recortado.jpg'
import cassette from '../assets/img/cassette-recortado.jpg'
import atom from '../assets/img/atom.jpg'



const cards = [
    {
        id: 1,
        title: 'Card 1',
        image: space,
        url: 'https://www.kenjiarakaki.com/',
    },
    {
        id: 2,
        title: 'Card 2',
        image: cassette,
        url: 'https://www.kenjiarakaki.com/',
    },
    {
        id: 3,
        title: 'Card 3',
        image: atom,
        url: 'https://www.kenjiarakaki.com/',
    }
]

const Cards = () => {
    return (
        <div className="container d-flex justify-content-center 
                         align-items-center h-100 ">
            <div className="row">
                {
                    cards.map(({id, title, image, url}) => (
                        <div className="col-4" key={id}>
                            <Card 
                                title={title}
                                image={image}
                                url={url}
                            /> 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
