import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Products from './components/body/products/Products';
import DetailProduct from './components/body/detailProduct/DetailProduct';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<DetailProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
