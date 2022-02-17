import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';

import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Header />

      <Route path="/welcome">
        <Welcome />
      </Route>

      <Route path="/products">
        <Products />
      </Route>

      <Route path="/product-details/:productId">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
