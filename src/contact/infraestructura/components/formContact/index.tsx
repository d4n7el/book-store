import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ButtonOval from '../../../../infraestructura/components/button';
import ErrorIcon from '@mui/icons-material/Error';

const FormContact = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData);
    },
  });

  console.log(formik.errors);

  return (
    <>
      <div className="input-form">
        <FormControl sx={{ m: 1 }} variant="filled">
          <FilledInput
            autoComplete="off"
            placeholder="Name"
            id="filled-adornment-password"
            type={'text'}
            value={formik.values.name}
            onChange={(e) => {
              formik.setFieldValue('name', e.target.value);
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
                  {formik.errors.name && <ErrorIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="input-form">
        <FormControl sx={{ m: 1 }} variant="filled">
          <FilledInput
            placeholder="Email"
            autoComplete="off"
            id="filled-adornment-password"
            type={'text'}
            value={formik.values.email}
            required
            onChange={(e) => {
              formik.setFieldValue('email', e.target.value);
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
                  {formik.errors.email && <ErrorIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="input-form">
        <FormControl sx={{ m: 1 }} variant="filled">
          <FilledInput
            placeholder="Phone Number"
            autoComplete="off"
            id="filled-adornment-password"
            type={'text'}
            value={formik.values.phoneNumber}
            onChange={(e) => {
              formik.setFieldValue('phoneNumber', e.target.value);
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
                  {formik.errors.phoneNumber && <ErrorIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="input-form-text-area">
        <TextField
          fullWidth
          id="outlined-textarea"
          placeholder="Message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={(e) => {
            formik.setFieldValue('message', e.target.value);
          }}
        />
      </div>
      <ButtonOval
        txt="SEND"
        className="button-widthfull-second"
        onClick={() => {
          formik.handleSubmit();
        }}
      />
    </>
  );
};

export default FormContact;

const initialValues = () => ({
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
});

const validationSchema = () => ({
  name: Yup.string().required(),
  email: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  message: Yup.string(),
});
