import { useState } from 'react'
import CrewImage from '../components/CrewImage'

const CrewCarrousel = () => {
  const images = ['image-douglas-hurley.png', 'image-mark-shuttleworth.png', 'image-victor-glover.png', 'image-anousheh-ansari.png']
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(images[0])
  const [loaded, setLoaded] = useState(false)

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false)
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1
      setSelectedImage(images[nextIndex])
      setSelectedIndex(nextIndex)
    }, 500)
  }

  const previous = () => {
    selectNewImage(selectedIndex, images, false)
  }

  const next = () => {
    selectNewImage(selectedIndex, images)
  }

  return (
    <div>
      <CrewImage
        image={require(`assets/crew/${selectedImage}`).default} alt='Gentleman'
        className={loaded ? 'loaded' : ''}
        onLoad={() => setLoaded(true)}
      />
      <buttom onClick={previous}>
        next
      </buttom>
      <buttom onClick={next}>
        next
      </buttom>
    </div>
  )
}

export default CrewCarrousel
