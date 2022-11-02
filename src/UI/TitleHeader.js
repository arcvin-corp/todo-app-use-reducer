import style from './TitleHeader.module.css';

const TitleHeader = props => {
  return (
    <div className={style['title-header']}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default TitleHeader;
