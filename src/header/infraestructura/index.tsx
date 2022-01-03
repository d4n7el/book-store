import { useEffect, useState } from 'react';
import '../infraestructura/style/index.scss';
import ButtonOval from '../../infraestructura/components/button';
import HeaderImg from '../../infraestructura/assets/slider-img.png';
import Fab from '@mui/material/Fab';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const Header = () => {
  return (
    <div className="header">
      <div className="container-header">
        <div className="header-left">
          <p>Bostorek Bookstore</p>
          <h1>For All Your Reading Needs</h1>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iste quam
            velit saepe dolorem deserunt quo quidem ad optio.
          </small>
          <br></br>
          <ButtonOval
            className="btn-first"
            txt="Read More"
            variant="contained"
            size={'large'}
          />
        </div>
        <div className="header-right">
          <img
            src={HeaderImg}
            srcSet={HeaderImg}
            alt={'header-img'}
            loading="lazy"
          />
        </div>
      </div>
      <div className="arrow-slider">
        <Fab color="secondary" aria-label="add">
          <ArrowBackIosNew />
        </Fab>
        <Fab color="secondary" aria-label="add">
          <ArrowForwardIos />
        </Fab>
      </div>
    </div>
  );
};

export default Header;
