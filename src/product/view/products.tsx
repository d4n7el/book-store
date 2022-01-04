import { Dispatch, SetStateAction } from 'react';
import { ProductDTO } from '../infraestructura/dto/productDTO';
import Title from '../../infraestructura/components/title';
import ProductCard from '../component/ProductCard';
import Fab from '@mui/material/Fab';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import '../style/products.scss';
import Search from '@mui/icons-material/Search';

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
  const formik = useFormik({
    initialValues: initialValues(search),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setSearch(formData.search);
    },
  });

  return (
    <div>
      <Title title="Products" />

      <div className="input-app">
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <FilledInput
            autoComplete="off"
            id="filled-adornment-password"
            type={'text'}
            value={formik.values.search}
            onChange={(e) => {
              formik.setFieldValue('search', e.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

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

const initialValues = (search: string) => ({
  search: search,
});

const validationSchema = () => ({
  search: Yup.string().required(),
});
