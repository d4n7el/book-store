import Button from '@mui/material/Button';
import CSS from 'csstype';

const variants = { contained: 'contained' };

const defaultProps = {
  size: 'small',
  variant: 'contained',
  style: {},
  txt: 'txt button',
  className: '',
  onClick: () => {},
};

type IProps = {
  size: string;
  variant: string;
  style: CSS.Properties;
  className: string;
  txt: string;
  onClick: () => void;
} & typeof defaultProps;

const ButtonOval = ({
  size,
  variant,
  style,
  txt,
  className,
  onClick,
}: IProps) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      style={style}
      size={(size = 'small' ? 'small' : size === 'medium' ? 'medium' : 'large')}
      variant={
        variant === 'outlined'
          ? 'outlined'
          : variant === 'contained'
          ? 'contained'
          : 'text'
      }
    >
      {txt}
    </Button>
  );
};

ButtonOval.defaultProps = defaultProps;

export default ButtonOval;
