import React from 'react'

const CrewImage = ({ image, alt }) => {
  return (
    <div className='crew-image'>
      <img src={image} alt={alt} />
    </div>
  )
}

export default CrewImage
