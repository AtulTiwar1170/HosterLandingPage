import Footer from "./components/Footer"
import Header from "./components/Header"
import Body from "./components/Body"


function App() {

  return (
    // <></> This is fragments
    <> 
      <div className="bg-amber-50 min-h-screen flex flex-col px-6 md:px-10 md:py-7 lg:px-20 lg:py-10">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default App
