import { useState, useEffect } from 'react';
import { ProductDTO } from '../infraestructura/dto/productDTO';
import { getProductsService } from '../domain/product.service';
import ProductsView from '../view/products';
import SkeletonView from '../../infraestructura/components/skeleton';

const Products = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setProducts([]);
    dataProducts();
  }, [page]);

  const dataProducts = async () => {
    const data = await getProductsService(page);

    setProducts(data);
  };

  return products.length > 0 ? (
    <ProductsView products={products} setPage={setPage} page={page} />
  ) : (
    <SkeletonView />
  );
};

export default Products;
