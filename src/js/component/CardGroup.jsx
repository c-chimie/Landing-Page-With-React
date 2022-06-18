import React from 'react'
import Card from "./Card.jsx"

const cardInfo = [{
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iusto?",
    image: "https://picsum.photos/id/1005/500/325"
},
{
    title: "Title 2",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, necessitatibus?",
    image: "https://picsum.photos/id/1080/500/325"
},{
    title: "Title 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa!",
    image: "https://picsum.photos/id/1084/500/325"
},{
    title: "Title 4",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, doloremque.",
    image: "https://picsum.photos/id/182/500/325"
}]


const CardGroup = () => {
  return (
    <div className="d-flex p-3 mb-4 justify-content-around">
        {cardInfo.map( (card, i) => {
            return <Card key={i} cardProp={card} />
        })}
        
    </div>
  )
}

export default CardGroup