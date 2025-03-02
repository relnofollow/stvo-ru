import styles from "./styles.module.css";

export default function VerifiedTranslationIcon() {
  return (
    <span className={"badge badge--secondary no-print " + styles.verifiedBadge}>
      Перевод проверен
    </span>
  );
}
