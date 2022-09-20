import styles from "./index.module.scss";
type TitleProps = { text: string };

export function Title({ text }: TitleProps) {
  return <h1 className={styles.title}>{text}</h1>;
}
