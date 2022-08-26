import { Navbar, Welcome, Transaction, Footer, Diagram, Loader, Services } from "./components"
const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
      <Diagram />
    </div>
  )
}

export default App
