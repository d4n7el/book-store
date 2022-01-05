import TextField from '@mui/material/TextField';

interface IProps {
  item: string;
  formik: any;
  placeholder: string;
  dataTestid: string;
}

const TextareaApp = ({ item, formik, placeholder, dataTestid }: IProps) => {
  return (
    <div className="input-form-text-area" data-testid={dataTestid}>
      <TextField
        fullWidth
        id="outlined-textarea"
        placeholder={placeholder}
        multiline
        rows={4}
        value={formik.values.message}
        onChange={(e) => {
          formik.setFieldValue(item, e.target.value);
        }}
      />
    </div>
  );
};

export default TextareaApp;
