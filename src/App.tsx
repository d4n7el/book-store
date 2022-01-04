import Header from './header/infraestructura';
import Products from './product/container/products';
import BlogView from './blog/infraestructura/view/blog';
import './infraestructura/theme/base.scss';
import ContactView from './contact/infraestructura/view/contact';
import ResponsiveAppBar from './nav/infraestructura';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Header />
      <Products />
      <BlogView />
      <ContactView />
    </div>
  );
}

export default App;
