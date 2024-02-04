import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => (
  <div className="tracker-con">
    <div>
      <h1>Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="cryptocurrency-img"
      />
    </div>
    <CryptocurrenciesList />
  </div>
)

export default CryptocurrencyTracker
