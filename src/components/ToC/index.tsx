import DocCard from "@site/src/theme/DocCard";

const topLevelLinks = [
  {
    link: "/docs/category/general-traffic-rules",
    label: "I. Общие правила дорожного движения",
    description: "I. Allgemeine Verkehrsregeln",
  },
  {
    link: "/docs/category/signs-structures",
    label: "II. Знаки и дорожные сооружения",
    description: "II. Zeichen und Verkehrseinrichtungen",
  },
  {
    link: "/docs/category/enforcement-penalties",
    label: "III. Применение, штрафы и заключительные положения",
    description: "III. Durchführungs-, Bußgeld- und Schlussvorschriften",
  },
  {
    link: "/docs/appendix-1",
    label: "Приложение 1. Общие и специальные знаки опасности",
    description: "Anlage 1 Allgemeine und Besondere Gefahrzeichen",
  },
  {
    link: "/docs/appendix-2",
    label: "Приложение 2. Нормативные знаки",
    description: "Anlage 2 Vorschriftzeichen",
  },
  {
    link: "/docs/appendix-3",
    label: "Приложение 3. Регулирующие знаки",
    description: "Anlage 3 Richtzeichen",
  },
  {
    link: "/docs/appendix-4",
    label: "Приложение 4. Дорожные сооружения",
    description: "Anlage 4 Verkehrseinrichtungen",
  },
  {
    link: "/docs/changes-history",
    label: "История изменений StVO",
  },
];

export default function ToC() {
  return topLevelLinks.map((item, index) => (
    <article key={index} className="margin-bottom--md">
      <DocCard
        item={{
          type: "link",
          label: item.label,
          description: item.description,
          href: item.link,
        }}
      />
    </article>
  ));
}
