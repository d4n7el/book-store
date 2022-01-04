import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ErrorIcon from '@mui/icons-material/Error';

interface IProps {
  item: string;
  formik: any;
  placeholder: string;
}

const InputApp = ({ item, formik, placeholder }: IProps) => {
  return (
    <div className="input-form">
      <FormControl sx={{ m: 1 }} variant="filled">
        <FilledInput
          autoComplete="off"
          placeholder={placeholder}
          id="filled-adornment-password"
          type={'text'}
          value={formik.values[item]}
          onChange={(e) => {
            formik.setFieldValue(item, e.target.value);
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
                {formik.errors[item] && <ErrorIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default InputApp;
