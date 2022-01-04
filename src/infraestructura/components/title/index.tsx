import './style/index.scss';

interface IProps {
  title: string;
  className: string;
}

const Title = ({ title, className }: IProps) => {
  return (
    <div className="title-app">
      <h3 className={className}>{title}</h3>
    </div>
  );
};

export default Title;
