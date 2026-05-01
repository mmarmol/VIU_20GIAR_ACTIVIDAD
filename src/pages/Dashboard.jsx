import Navbar from '../components/Navbar'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <main className="dashboard-content">
        <section className="dashboard-filters">
        </section>
        <section className="dashboard-charts">
        </section>
      </main>
    </div>
  )
}
