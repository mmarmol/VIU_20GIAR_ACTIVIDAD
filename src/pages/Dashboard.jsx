import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import PriceChart from '../components/PriceChart'
import VolumeChart from '../components/VolumeChart'
import TickerSelector from '../components/TickerSelector'
import { getStockData } from '../services/stockService'
import './Dashboard.css'

export default function Dashboard() {
  const [ticker, setTicker] = useState('AAPL')
  const [stockData, setStockData] = useState(null)
  const [loadedTicker, setLoadedTicker] = useState(null)

  useEffect(() => {
    let cancelled = false
    getStockData(ticker).then((result) => {
      if (!cancelled) {
        setStockData(result.data)
        setLoadedTicker(ticker)
      }
    })
    return () => { cancelled = true }
  }, [ticker])

  const loading = loadedTicker !== ticker

  return (
    <div className="dashboard">
      <Navbar />
      <main className="dashboard-content">
        <section className="dashboard-filters">
          <TickerSelector selected={ticker} onChange={setTicker} />
        </section>
        <section className="dashboard-charts">
          {loading || !stockData ? (
            <p>Cargando datos...</p>
          ) : (
            <>
              <PriceChart data={stockData} />
              <VolumeChart data={stockData} />
            </>
          )}
        </section>
      </main>
    </div>
  )
}
