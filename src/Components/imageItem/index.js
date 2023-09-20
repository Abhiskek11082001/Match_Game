import './index.css'

const ImageItem = props => {
  const {imageDetails, checkMatch} = props
  const {id, thumbnailUrl} = imageDetails

  const onCheckMatch = () => {
    checkMatch(id)
  }
  return (
    <li className="image-item-container">
      <button className="image-button" type="button" onClick={onCheckMatch}>
        <img className="image-item-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
