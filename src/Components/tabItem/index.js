import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTab(tabId)
  }

  return (
    <li className="tabItem-container">
      <button type="button" className="tabItem-button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
