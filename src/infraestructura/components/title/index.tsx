import './style/index.scss';

interface IProps {
  title: string;
}

const Title = ({ title }: IProps) => {
  return (
    <div className="title-app">
      <h3>{title}</h3>
    </div>
  );
};

export default Title;
