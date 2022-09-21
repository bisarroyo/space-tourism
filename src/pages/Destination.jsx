import moon from '../../src/assets/destination/image-moon.png'

const Destination = () => {
  return (
    <div className='bg destination-bg'>
      <div className='destination-container'>
        <h5><span>01</span> Pick your destination</h5>
        <div className='destination-img'>
          <img src={moon} alt='Moon photo' />
        </div>
        <div className='destination-info'>
          <h2>MOON</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
          </p>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Destination
