import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Iprops {
  image: string;
  txtButton: string;
  title: string;
  msg: string;
  actions: string[];
}

const BlogCard = ({ image, txtButton, title, msg, actions }: Iprops) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt="green iguana" />
      <CardContent>
        <Button variant="contained" className="button-title" size="small">
          {txtButton}
        </Button>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {msg}
        </Typography>
      </CardContent>
      <CardActions>
        {actions.map((action) => {
          return (
            <Button key={action} size="small">
              {action}
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
};

export default BlogCard;
