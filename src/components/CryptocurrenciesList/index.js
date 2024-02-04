// CryptocurrenciesList.jsx
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {coinList: [], isLoader: true}

  componentDidMount() {
    this.getCoinsList()
  }

  getCoinsList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({coinList: updatedData, isLoader: false})
    console.log(updatedData)
  }

  render() {
    const {coinList, isLoader} = this.state
    return (
      <>
        {isLoader ? (
          <Loader />
        ) : (
          <div>
            {coinList.map(each => (
              <CryptocurrencyItem coinTypes={each} key={each.id} />
            ))}
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
