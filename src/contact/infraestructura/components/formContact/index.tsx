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
    },
  });

  const [open, setOpen] = useState(false);
  const [contentModal, setcontentModal] = useState<JSX.Element>(<></>);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
