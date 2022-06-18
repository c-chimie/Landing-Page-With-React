import React from 'react'

const Card = ({cardProp}) => {
  return (
    <div className="card text-center" style={{width: "18rem"}}>
  <img className="card-img-top" src={cardProp.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{cardProp.title}</h5>
    <p className="card-text">{cardProp.content}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
}

export default Card