import '../style/index.scss';
import imgContact from '../../../infraestructura/assets/contact-img.png';
import FormContact from '../components/formContact';

const ContactView = () => {
  return (
    <div className="container-contact">
      <div className="form-contact">
        <FormContact />
      </div>
      <div className="image-contact">
        <img
          src={imgContact}
          srcSet={imgContact}
          alt={'header-img'}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactView;
