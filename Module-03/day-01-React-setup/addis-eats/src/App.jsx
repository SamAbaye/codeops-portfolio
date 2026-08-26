import './App.css'
import {React} from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer  from './Components/Footer/Footer'


function App() { 

  return (
    <section className='main'>
      <Header/>
      <Main/>
      <Footer/>
    </section>
  )
}

export default App
