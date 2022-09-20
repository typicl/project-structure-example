import cx from "classnames";
import styles from "./index.module.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
};

export function Button({ text, onClick, isActive }: ButtonProps) {
  return (
    <button
      className={cx(styles.button, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
