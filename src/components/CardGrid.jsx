import React from 'react'
import Card from './Card'

const CardGrid = (props) => {
  const itemsList = props.items || []

  if (!itemsList.length) return null

  return (
    <section className="cards-grid">
      {itemsList.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          alt={item.alt}
        />
      ))}
    </section>
  )
}

export default CardGrid
