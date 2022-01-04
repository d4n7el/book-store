import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ButtonOval from '../../../../infraestructura/components/button';
import ErrorIcon from '@mui/icons-material/Error';
import InputApp from '../../../../infraestructura/components/input';
import TextareaApp from '../../../../infraestructura/components/textarea';

const FormContact = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {},
  });
  return (
    <>
      <InputApp item="name" formik={formik} placeholder="Name" />
      <InputApp item="email" formik={formik} placeholder="Email" />
      <InputApp item="phoneNumber" formik={formik} placeholder="Phone Number" />
      <TextareaApp item="message" formik={formik} placeholder="Message" />

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
