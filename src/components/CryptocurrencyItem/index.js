import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {coinTypes} = this.props
    console.log(coinTypes)

    const {id, currencyLogo, currencyName, euroValue, usdValue} = coinTypes
    return (
      <div key={id}>
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p>{euroValue}</p>
        <p>{usdValue}</p>
      </div>
    )
  }
}

export default CryptocurrencyItem
