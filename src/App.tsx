import Header from './components/Header'
import SearchSection from './components/SearchSection'
import HomestayResults from './components/HomestayResults'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SearchSection />
      <HomestayResults />
    </div>
  )
}

export default App