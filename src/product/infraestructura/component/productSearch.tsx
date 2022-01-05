import { Dispatch, SetStateAction } from 'react';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SearchIcon from '@mui/icons-material/Search';

interface IProps {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
}

const ProductSearch = ({ search, setSearch }: IProps) => {
  const formik = useFormik({
    initialValues: initialValues(search),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setSearch(formData.search);
    },
  });

  return (
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
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default ProductSearch;

const initialValues = (search: string) => ({
  search: search,
});

const validationSchema = () => ({
  search: Yup.string(),
});
