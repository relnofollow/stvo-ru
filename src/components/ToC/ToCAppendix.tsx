import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const appendixLinks = {
  "1": [
    {
      label: "1. Общие предупреждающие знаки",
      href: "/docs/appendix-1#1",
    },
    {
      label:
        "2. Специальные предупреждающие знаки перед железнодорожными переездами с приоритетом",
      href: "/docs/appendix-1#2",
    },
  ],
  "2": [
    {
      label: "1. Требования остановки и ожидания",
      href: "/docs/appendix-2#1",
    },
    {
      label: "2. Предписанные направления движения",
      href: "/docs/appendix-2#2",
    },
    {
      label: "3. Предписанные направления объезда",
      href: "/docs/appendix-2#3",
    },
    {
      label:
        "4. Использование обочины как полосы движения, остановки и стоянки для такси",
      href: "/docs/appendix-2#4",
    },
    { label: "5. Специальные пути", href: "/docs/appendix-2#5" },
    { label: "6. Запрет движения", href: "/docs/appendix-2#6" },
    {
      label: "7. Ограничения скорости и запреты на обгон",
      href: "/docs/appendix-2#7",
    },
    {
      label: "8. Запреты на остановку и стоянку",
      href: "/docs/appendix-2#8",
    },
    { label: "9. Разметка", href: "/docs/appendix-2#9" },
  ],
  "3": [
    { label: "1. Знаки приоритета", href: "/docs/appendix-3#1" },
    {
      label: "2. Обозначения населенных пунктов",
      href: "/docs/appendix-3#2",
    },
    { label: "3. Парковка", href: "/docs/appendix-3#3" },
    {
      label: "4. Зона с ограниченным движением",
      href: "/docs/appendix-3#4",
    },
    { label: "5. Туннель", href: "/docs/appendix-3#5" },
    { label: "6. Аварийный карман", href: "/docs/appendix-3#6" },
    {
      label: "7. Автомагистрали и автомобильные дороги",
      href: "/docs/appendix-3#7",
    },
    { label: "8. Разметка", href: "/docs/appendix-3#8" },
    { label: "9. Информационные знаки", href: "/docs/appendix-3#9" },
    { label: "10. Указатели", href: "/docs/appendix-3#10" },
    { label: "11. Указатели объездов", href: "/docs/appendix-3#11" },
    {
      label: "12. Прочая организация дорожного движения",
      href: "/docs/appendix-3#12",
    },
  ],
  "4": [
    {
      label:
        "1. Средства для обозначения рабочих и аварийных мест или других временных препятствий",
      href: "/docs/appendix-4#1",
    },
    {
      label:
        "2. Средства для обозначения постоянных препятствий или других опасных мест",
      href: "/docs/appendix-4#2",
    },
    {
      label: "3. Средства для обозначения маршрута дороги",
      href: "/docs/appendix-4#3",
    },
    {
      label:
        "4. Предупредительная табличка для обозначения транспортных средств и прицепов в темное время суток",
      href: "/docs/appendix-4#4",
    },
  ],
};

export default function ToCAppendix({
  appendixNumber,
}: {
  appendixNumber: string;
}) {
  const links = appendixLinks[appendixNumber];
  if (!links) {
    return <div>Not found</div>;
  }

  return (
    <ul className={styles.linksList}>
      {links.map((link, index) => (
        <li key={index} className={styles.linksListItem}>
          <Link className={styles.link} href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
