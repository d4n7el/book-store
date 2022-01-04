import { Dispatch, SetStateAction } from 'react';
import { ProductDTO } from '../infraestructura/dto/productDTO';
import Title from '../../infraestructura/components/title';
import ProductCard from '../component/ProductCard';
import Fab from '@mui/material/Fab';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import '../style/products.scss';

interface IProps {
  products: ProductDTO[];
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
}

const ProductsView = ({ products, setPage, page }: IProps) => {
  return (
    <div>
      <Title title="Products" />
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
          {page > 1 && (
            <Fab
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

          <Fab
            color="secondary"
            className="arrow-rigth"
            aria-label="add"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <KeyboardArrowRight />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
