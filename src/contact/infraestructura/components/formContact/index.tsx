import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonOval from '../../../../infraestructura/components/button';
import InputApp from '../../../../infraestructura/components/input';
import TextareaApp from '../../../../infraestructura/components/textarea';
import BasicModal from '../../../../infraestructura/components/modal';
import DetailInfoForm from '../detailInfoForm';

const FormContact = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      handleOpen();
      setcontentModal(
        <DetailInfoForm
          name={formData.name}
          email={formData.email}
          phoneNumber={formData.phoneNumber}
          message={formData.message}
        />
      );
      formik.resetForm();
    },
  });

  const [open, setOpen] = useState(false);
  const [contentModal, setcontentModal] = useState<JSX.Element>(<></>);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <InputApp
        item="name"
        formik={formik}
        placeholder="Name"
        dataTestid="form-name"
      />
      <InputApp
        item="email"
        formik={formik}
        placeholder="Email"
        dataTestid="form-email"
      />
      <InputApp
        item="phoneNumber"
        formik={formik}
        placeholder="Phone Number"
        dataTestid="form-phoneNumber"
      />
      <TextareaApp
        item="message"
        formik={formik}
        placeholder="Message"
        dataTestid="form-message"
      />

      <ButtonOval
        dataTestid="submit-form-contact"
        txt="SEND"
        className="button-widthfull-second"
        onClick={() => {
          formik.handleSubmit();
        }}
      />

      <BasicModal
        open={open}
        handleClose={handleClose}
        children={contentModal}
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
