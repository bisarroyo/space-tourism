import { useState } from 'react'

const DestinationImage = ({ image, alt }) => {
  const [imageLoad, setImageLoad] = useState(false)

  return (
    <div className='destination-img'>
      <img src={image} alt={alt} className={imageLoad ? 'image-loaded' : ''} onLoad={() => { setImageLoad(true) }} />
    </div>
  )
}

export default DestinationImage
