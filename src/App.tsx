import Header from './header/infraestructura';
import Products from './product/container/products';
import BlogView from './blog/infraestructura/view/blog';
import './infraestructura/theme/base.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <BlogView />
    </div>
  );
}

export default App;
