import styles from "@/styles/BlueFrame.module.css";
import { Container } from "@/components/Container";
import Link from "next/link";

export const BlueFrame = (props) => {
  const { children } = props;
  return (
    <div className={styles.frame}>
      <Container>{children}</Container>

      <Link href="/blog" className={styles.sideBtn}>
        Recent Blog Posts
      </Link>
    </div>
  );
};
