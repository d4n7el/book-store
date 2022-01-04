import '../style/index.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinkIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationIcon from '@mui/icons-material/FmdGood';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Title from '../../../infraestructura/components/title';

const About = () => {
  return (
    <div id="About" className="container-about">
      <div className="about-us">
        <Title title={'About Us'} className="light" />
        <div>
          <p className="txt-about">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium pariatur optio beatae sint nam. Fugiat saepe aspernatur,
            laudantium adipisci deleniti exceptur
          </p>
        </div>
        <div className="container-social">
          <Avatar>
            <FacebookIcon />
          </Avatar>
          <Avatar>
            <TwitterIcon />
          </Avatar>
          <Avatar>
            <LinkedinkIcon />
          </Avatar>
          <Avatar>
            <InstagramIcon />
          </Avatar>
        </div>
      </div>
      <div className="address">
        <Title title={'Address'} className="light" />
        <div className="container-address">
          <div className="icon">
            <Avatar>
              <LocationIcon />
            </Avatar>
          </div>
          <div className="label-icon">Location</div>
        </div>
        <div className="container-address">
          <div className="icon">
            <Avatar>
              <CallIcon />
            </Avatar>
          </div>
          <div className="label-icon">Call + 01 1234567890</div>
        </div>
        <div className="container-address">
          <div className="icon">
            <Avatar>
              <MailIcon />
            </Avatar>
          </div>
          <div className="label-icon">demo@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default About;
