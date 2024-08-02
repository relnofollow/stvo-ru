import styles from "./styles.module.css";

export default function VerifiedTranslationIcon() {
  return (
    <span title="Перевод проверен" className={styles.iconWrapper}>
      ✓
    </span>
  );
}
