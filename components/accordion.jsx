import styles from "@/styles/accordion.module.css";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export const Accordion = (props) => {
  const { heading, children } = props;
  const [open, setOpen] = useState(false);
  const toggleText = () => {
    setOpen((open) => !open);
  };
  return (
    <div className={open ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div className={styles.text}>
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};
