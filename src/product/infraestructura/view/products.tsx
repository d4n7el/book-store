import { Dispatch, SetStateAction } from 'react';
import { ProductDTO } from '../dto/productDTO';
import Title from '../../../infraestructura/components/title';
import ProductCard from '../../component/productCard';
import Fab from '@mui/material/Fab';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import ProductSearch from '../../component/productSearch';

import '../style/products.scss';

interface IProps {
  products: ProductDTO[];
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  next: boolean;
  previous: boolean;
}

const ProductsView = ({
  products,
  setPage,
  page,
  setSearch,
  search,
  next,
  previous,
}: IProps) => {
  return (
    <div id="Products" data-testid="list-products">
      <Title title="Products" className="center" />
      <ProductSearch setSearch={setSearch} search={search} />
      <div className="content-card-products">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.title}
              value={15.28}
              language={product.languages}
              autor={
                product.authors[0] ? product.authors[0].name : 'Sin asignar'
              }
            />
          );
        })}
        <div className="arrow-slider-products">
          {previous && (
            <Fab
              data-testid="icon-arrow-left-products"
              color="secondary"
              className="arrow-left"
              aria-label="add"
              onClick={() => {
                setPage(page - 1);
              }}
            >
              <KeyboardArrowLeft />
            </Fab>
          )}

          {next && (
            <Fab
              data-testid="icon-arrow-rigth-products"
              color="secondary"
              className="arrow-rigth"
              aria-label="add"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <KeyboardArrowRight />
            </Fab>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
