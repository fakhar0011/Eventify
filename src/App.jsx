import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home   from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}
