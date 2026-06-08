import React from 'react'

const Card = (props) => {
  return (
    <article className="card">
      <img src={props.image} alt={props.alt} />
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href="#" className="card-link">
          Learn more
        </a>
      </div>
    </article>
  )
}

export default Card
