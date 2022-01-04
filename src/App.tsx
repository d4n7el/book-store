import Header from './header/infraestructura';
import Products from './product/container/products';
import './infraestructura/theme/base.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
