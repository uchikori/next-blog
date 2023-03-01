import Link from "next/link";
import styles from "@/styles/post-category.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";

export const PostCategories = (props) => {
  const { categories } = props;
  console.log(categories);
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) => {
          return (
            <li key={slug}>
              <Link href={`/blog/category/${slug}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
