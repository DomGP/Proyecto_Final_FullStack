import { Routes, Route } from 'react-router-dom' 

//COMPONENTS
import NavBar from './components/NavBar'


//VIEWS
import HomePage from './views/HomePage'

//CSS
import './App.css'



function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route
          path = '/' 
          element = {<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
