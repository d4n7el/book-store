import Header from './header/infraestructura';
import Products from './product/container/products';
import BlogView from './blog/infraestructura/view/blog';
import './infraestructura/theme/base.scss';
import ContactView from './contact/infraestructura/view/contact';
import ResponsiveAppBar from './nav/infraestructura';
import About from './about/infraestructura/view/about';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Header />
      <Products />
      <BlogView />
      <ContactView />
      <About />
    </div>
  );
}

export default App;
