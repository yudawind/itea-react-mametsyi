import s from "./index.module.scss";

export const Button = ({ children, onClick }) => {
  return (
    <button
      className={s.customButton}
      type="button"
      name="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
