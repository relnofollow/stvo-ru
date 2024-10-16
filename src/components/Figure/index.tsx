import styles from "./styles.module.css";

export default function Figure({
  imgSrc,
  caption,
  alt,
}: {
  imgSrc: string;
  caption?: string;
  alt?: string;
}) {
  return (
    <figure className={styles.figure}>
      <div className={styles.imgWrap}>
        <img src={imgSrc} alt={alt ?? caption} className={styles.img} />
      </div>
      {caption && (
        <figcaption
          dangerouslySetInnerHTML={{ __html: caption }}
          className={styles.figCaption}
        ></figcaption>
      )}
    </figure>
  );
}
