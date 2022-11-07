import style from './Button.module.css';

const Button = ({ className, type, onClick, children }) => {
  return (
    <button
      className={`${style.button} ${style[className]}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
