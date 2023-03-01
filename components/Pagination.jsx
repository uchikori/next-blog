import styles from "@/styles/pagination.module.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export const Pagination = (props) => {
  const { prevText = "", prevUrl = "", nextText = "", nextUrl = "" } = props;
  return (
    <ul className={styles.flexContainer}>
      {prevText ? (
        <li className={styles.prev}>
          <Link href={prevUrl} className={styles.iconText}>
            <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
            <span>{prevText}</span>
          </Link>
        </li>
      ) : null}
      {nextText ? (
        <li className={styles.next}>
          <Link href={nextUrl} className={styles.iconText}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
          </Link>
        </li>
      ) : null}
    </ul>
  );
};
