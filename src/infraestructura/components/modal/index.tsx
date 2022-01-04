import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface IProps {
  open: boolean;
  handleClose: () => void;
  children: JSX.Element;
}

const BasicModal = ({ open, handleClose, children }: IProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="content-modal-basic"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
