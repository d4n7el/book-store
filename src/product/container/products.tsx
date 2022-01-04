import { useState, useEffect } from 'react';
import { ProductDTO } from '../infraestructura/dto/productDTO';
import { getProductsService } from '../domain/product.service';
import ProductsView from '../view/products';
import SkeletonView from '../../infraestructura/components/skeleton';

const Products = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [reload, setReload] = useState<boolean>(true);
  const [next, setNext] = useState<boolean>(true);
  const [previous, setPrevious] = useState<boolean>(true);

  useEffect(() => {
    if (reload) {
      setProducts([]);
      dataProducts();
    }
  }, [page]);

  useEffect(() => {
    setProducts([]);
    setReload(false);
    setPage(1);
    searchProducts();
  }, [search]);

  const dataProducts = async () => {
    const data = await getProductsService(page, search);
    setProducts(data.results);
    setNext(data.next ? true : false);
    setPrevious(data.previous ? true : false);
  };

  const searchProducts = async () => {
    const data = await getProductsService(1, search);
    setProducts(data.results);
    setNext(data.next ? true : false);
    setPrevious(data.previous ? true : false);
    setReload(true);
  };

  return products.length > 0 ? (
    <ProductsView
      products={products}
      setPage={setPage}
      page={page}
      setSearch={setSearch}
      search={search}
      next={next}
      previous={previous}
    />
  ) : (
    <SkeletonView />
  );
};

export default Products;
