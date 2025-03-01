import Link from "@docusaurus/Link";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import { PropSidebarItemCategory } from "@docusaurus/plugin-content-docs";
import styles from "./styles.module.css";

export default function ToC({ path }: { path: string }) {
  const sidebar = useDocsSidebar();
  if (!sidebar) {
    throw new Error("Unexpected: cant find current sidebar in context");
  }

  const category = sidebar.items.find(
    (item) => item.type === "category" && item.href === path
  ) as PropSidebarItemCategory;

  return category && <CategoryLinks category={category} />;
}

function CategoryLinks({ category }: { category: PropSidebarItemCategory }) {
  return (
    <ul className={styles.linksList}>
      {category.items.map((item, index) => (
        <li className={styles.linksListItem} key={index}>
          {(item.type === "category" || item.type === "link") && (
            <Link className={styles.link} to={item.href}>
              {item.label}
            </Link>
          )}
          {item.type === "category" && <CategoryLinks category={item} />}
        </li>
      ))}
    </ul>
  );
}
