import '../style/index.scss';
import imgContact from '../../../infraestructura/assets/contact-img.png';
import FormContact from '../components/formContact';
import Title from '../../../infraestructura/components/title';

const ContactView = () => {
  return (
    <>
      <div className="container-contact" id="Contact">
        <div className="form-contact">
          <Title title="Contact Us" className="" />
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
    </>
  );
};

export default ContactView;
