import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
      <>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path=':about' element={<About />} />
          <Route exact path='skills' element={<Skills />} />
          <Route exact path='contact' element={<Contact />} />
        </Route>
      </Routes>
      </>
  )
}

export default App