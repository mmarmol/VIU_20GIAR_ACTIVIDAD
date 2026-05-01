import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import PriceChart from '../components/PriceChart'
import { getStockData } from '../services/stockService'
import './Dashboard.css'

export default function Dashboard() {
  const [stockData, setStockData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getStockData('AAPL').then((result) => {
      setStockData(result.data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="dashboard">
      <Navbar />
      <main className="dashboard-content">
        <section className="dashboard-filters">
        </section>
        <section className="dashboard-charts">
          {loading ? (
            <p>Cargando datos...</p>
          ) : (
            <PriceChart data={stockData} />
          )}
        </section>
      </main>
    </div>
  )
}
