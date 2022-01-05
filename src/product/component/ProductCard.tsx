import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import imgBook from '../../infraestructura/assets/favicon.png';

interface IProps {
  name: string;
  value: number;
  autor: string;
  language: string[];
}

const ProductCard = ({
  name = '',
  value = 15.28,
  autor = '',
  language = ['es'],
}: IProps) => {
  return (
    <Card data-testid={`content-cards-products-${name}`}>
      <div className="car-image">
        <div className="image-circle">
          <img src={imgBook} alt="book" />
        </div>
      </div>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="name-book"
        >
          <p className="name">{name.substring(0, 23)}</p>
          <p className="value">{`$${value}`}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary" className="autor">
          {autor}
        </Typography>
      </CardContent>
      <div className="content-languages">
        {language.map((lang) => {
          return (
            <Avatar key={lang} sx={{ width: 22, height: 22 }}>
              {lang}
            </Avatar>
          );
        })}
      </div>
    </Card>
  );
};

export default ProductCard;
