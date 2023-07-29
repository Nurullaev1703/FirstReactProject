import {Route, Routes} from 'react-router-dom'
import { ProductPage } from './pages/ProductPage';
import { About } from './pages/About';
import { Navigation } from './components/Navigation';

function App() {
  return(
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/about"element={<About />} />
    </Routes>
  </>
  )
  
}

export default App;
