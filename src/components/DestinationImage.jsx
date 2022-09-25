const DestinationImage = ({ image, alt }) => {
  return (
    <div className='destination-img'>
      <img src={image} alt={alt} />
    </div>
  )
}

export default DestinationImage
