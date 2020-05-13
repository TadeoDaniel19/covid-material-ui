import React, { useEffect, useState } from 'react'
import { Cards, CountryPicker, Chart } from './Components'
import { fetchData } from './api/'
import styles from './App.module.css'
import image from './images/coronavairus.jpg'

const App = () => {

  const [state, setState] = useState({
    data: {},
    country: ''
  })

  useEffect(() => {
    const fetchCall = async () => {
      const data = await fetchData()
      setState({ data })
    }

    fetchCall()
  }, [])

  const handleCountryChange = async (country) => {
    const data = await fetchData(country)

    setState({ data, country: country })
  }

  const { data, country } = state

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  )
}

export default App 