import { Routes, Route, Link } from 'react-router-dom';
import Blue from './Blue';
import Red from './Red';
import Home from './Home';

const App = () => {

  return (
    <>
      <div id="container">
          

        <div id="navbar">
          <Link to = '/'>Home</Link>
          <Link to = '/blue'>Blue</Link>
          <Link to = '/red'>Red</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/blue' element = {<Blue />} />
            <Route path = '/red' element = {<Red />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
